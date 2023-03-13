import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

// import ReactMarkdown from "react-markdown"
import Button from "../button/button"
import Tag from "../tag/tag"
import ListItem from "../list-item/list-item"
import './search-main.scss'

const SearchMain =({
  location,
  howMany,
  isResultsPage,
  useSuggestionEngine,
  title,
  text,
  formId,
  formAction,
  label,
  inputId,
  inputName,
  button,
  suggest,
  background
})=> {

  const [input, setInput] = useState(() => {
    if (location)
    if (location.state) 
      return location.state.searchTerm
    else 
      return null
  })
  const [searchTerm, setSearchTerm] = useState(() => {
    if (location)
    if (location.state) 
      return location.state.searchTerm
    else 
      return null
  })
  
  // const [searchEnabled, setSearchEnabled] = useState(0.0)

  // useEffect(() => {
  //   setSearchEnabled(window.localStorage.getItem("search-enabled") ? 1 : 0)
  // }, [])

  // useEffect(() => {
  //   if (searchEnabled >= 1) {
  //     window.localStorage.setItem("search-enabled", "true")
  //   }
  // }, [searchEnabled])

  const iconOpt = {
      icon: 'sprites.svg#it-file',
      size: 'sm',
      color: "primary",
      addonClasses: 'mt-1 flex-shrink-0 me-3'
  }

  const { localSearchPages: { index, store } } = useStaticQuery(graphql`
     query {
       localSearchPages {
         index
         store
       }
     }
  `)

  const formSubmit = (ev) => {
    ev.preventDefault();
    search(ev.target.elements.search.value);
  }

  const search = (input) => {
    setSearchTerm(input)
  }

  const searchOptions = {
    limit: `${howMany ? howMany : ''}`,
    suggest: `${useSuggestionEngine ? true : false}`, // XXX < activate to "fill" the spaces with suggestions, usefull for multiple words query
  }

  const results = useFlexSearch(searchTerm, index, store, searchOptions) // XXX < search run

  let styles = 'search-main'
	+ `${background ? ' bg-'+background : ''}`


  // if (location) 
  //   if(location.state) {
  //     setSearchTerm(location.state.searchTerm)
  //     // searchTerm: input = location.state.searchTerm
  //     console.log('STATO XXX:' + location.state.searchTerm)
  //     // setInput(stateSearchTerm)
  //     // search(stateSearchTerm)
  //   }

  return (
    <section className={styles}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className="search-main-content px-3 py-5 px-lg-0 px-lg-5 py-lg-6">
              <div className="text-container mb-5">
                {title && <h2>{title}</h2>}
                <p className="lead">{text}</p>
               </div>
              <div className="search-form px-4 pb-4 mb-5 shadow-lg">
                <form id={formId} onSubmit={formSubmit}>
                    <div className="d-flex flex-column align-items-center flex-md-row w-100">
                      <div className="form-group mb-0 flex-grow-1 me-md-4 w-100">
                        <label className="active" htmlFor={inputId}>{label}</label>
                        <input
                          type="search"
                          className="border-search search"
                          name="search"
                          id={inputId}
                          placeholder="Esplora Designers Italia"
                          autoComplete="off"
                          onChange={ev => setInput(ev.target.value)}
                          value={input}
                          // onClick={ev => { setSearchEnabled(searchEnabled + 0.1) }}
                          // readOnly={searchEnabled < 1}
                        />
                      </div>
                      <div className="button-wrapper mt-4 mt-md-0">
                        <Button type="submit" {...button} /*disabled={searchEnabled < 1}*/ />
                      </div>
                    </div>
                    <div className="it-list-wrapper">
                      <ul className="it-list mt-5 mt-md-3"> {/* < could be a full list component, hack for speed XXX */}
                        {results.map( result => (
                          <ListItem url={result.relativePath} key={result.id} iconLeft icon={iconOpt} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                            <h3 className="h6 mb-0">
                              <strong>{result.title}</strong>
                              {(result.tag !== "undefined") ? <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block "><Tag label={result.tag} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"></Tag></div> : null}
                              {(result.template === 'level1' || result.template === 'community') ? <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block "><Tag label="Panoramica" addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal"></Tag></div> : null}
                            </h3>
                            <p className="text-secondary fw-normal d-block mb-3">
                               {(result.description !== null) ? <small>{result.description}</small> : null}
                            </p>
                            {/* <div className="mb-3 text-muted"><small>{result.tag}</small></div> */}
                            {/* <div className="mb-3 text-muted"><small>{result.path}</small></div> */}
                            {/* <div className="mb-3 text-muted"><small>{result.template}</small></div> */}
                          </ListItem>
                        ))}
                        {(results.length > 4 && !isResultsPage) &&
                          <div className="mt-4 ps-4 pt-4 d-block border-top">
                            <strong><Link to="/ricerca/" state={{ searchTerm: input }}>Scopri più risultati</Link></strong>
                          </div>
                        }
                      </ul>
                    </div>
                </form>
              </div>
              {suggest &&
              <div className="suggest-wrapper d-lg-flex">
                <h3 className="mb-4">{suggest.title}</h3>
                {suggest.items && <div className="items-wrapper d-flex flex-wrap ms-lg-5">
                  <ul className="list-inline d-flex flex-wrap">
                    {suggest.items.map((item, index) => (
                      <li className="list-item me-4 mb-3" key={index}>
                        <Button onClick={() => { setInput(item.label); search(item.label) }} type="submit" size="md" btnStyle="outline-secondary">
                          {item.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>}
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchMain
