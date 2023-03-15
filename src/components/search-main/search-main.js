import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

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
  label,
  inputId,
  button,
  suggest,
  background
})=> {

  const [input, setInput] = useState(() => location?.state?.searchTerm)
  const [searchTerm, setSearchTerm] = useState(() => location?.state?.searchTerm)
  const [formSubmitted, setFormSubmitted] = useState(() => !!location?.state?.searchTerm)
  const [storedInput, setStoredInput] = useState(() => location?.state?.searchTerm)

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

  const liveRegionRef = useRef(null)
  const firstRound = useRef(true)
  useEffect(() => {
    if (firstRound.current) {
      firstRound.current = false
      return
    }
    if (liveRegionRef.current) {
      liveRegionRef.current.focus()
    }
  }, [storedInput])

  const formSubmit = (ev) => {
    ev.preventDefault();
    search(ev.target.elements.search.value);
    setFormSubmitted(true)
    setStoredInput(input)
  }

  const search = (input) => {
    setSearchTerm(input)
    setFormSubmitted(true)
    setStoredInput(input)
  }

  const searchOptions = {
    limit: `${howMany ? howMany : ''}`,
    // if true "fill" the spaces with suggestions, useful for multiple words query XXX
    suggest: useSuggestionEngine,
  }

  const results = useFlexSearch(searchTerm, index, store, searchOptions) 

  let styles = 'search-main'
	  + `${background ? ' bg-'+background : ''}`

  return (
    <section className={styles}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className="search-main-content px-3 py-5 px-lg-0 px-lg-5 py-lg-6" role="search">
              {title || text ?
                <div className="text-container mb-5">
                  {title && <h2>{title}</h2>}
                  {text && <p className="lead">{text}</p>}
                </div>
                : null
              }

               {suggest &&
              <div className="suggest-wrapper d-lg-flex">
                <h3 className="mb-4">{suggest.title}</h3>
                {suggest.items && <div className="items-wrapper d-flex flex-wrap ms-lg-5">
                  <ul className="list-inline d-flex flex-wrap">
                    {suggest.items.map((item, index) => (
                      <li className="list-item me-4 mb-3" key={index}>
                        <Button onClick={() => { setInput(item.label); search(item.label); }} type="submit" size="md" btnStyle="outline-secondary">
                          {item.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>}
              </div>
              }
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
                          minLength="3" 
                          required={true}
                          onChange={ev => setInput(ev.target.value)}
                          value={input || ''}
                        />
                      </div>
                      <div className="button-wrapper mt-4 mt-md-0">
                        <Button type="submit" {...button} />
                      </div>
                    </div>
                    <div className="it-list-wrapper">
                      <div  className="fw-normal text-muted">
                        <div class="live-region" tabIndex="-1" ref={liveRegionRef}> 
                          {(formSubmitted) && (results.length > 0) &&
                              <div className="mt-2 ps-4 pt-4"><p>Di seguito i migliori risultati per "<strong><mark>{storedInput}</mark></strong>":</p></div>
                          }
                          {(formSubmitted) && (results.length === 0) &&
                              <div className="mt-2 ps-4 pt-4"><p>Non ci sono risultati utili per "<strong><mark>{storedInput}</mark></strong>", possiamo aiutarti in altro modo?</p></div>
                          }
                        </div>
                      </div>
                      <ul className="it-list mt-5 mt-md-3">
                        {results.map( result => (
                          <ListItem url={result.relativePath} key={result.id} iconLeft icon={iconOpt} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                            <div className="d-md-flex">
                              <h3 className="h6 mb-0">
                               <strong>{result.title}</strong>
                              </h3>
                              <div>
                                {(result.tag !== "undefined") ? <div className="mb-2 mt-1 mb-md-0 mt-md-0"><Tag label={result.tag} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"></Tag></div> : null}
                                {(result.template === 'level1' || result.template === 'community') ? <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block "><Tag label="Panoramica" addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal"></Tag></div> : null}
                              </div>
                            </div>
                            <p className="text-secondary fw-normal d-block mb-3">
                               {(result.description !== null) ? <small>{result.description}</small> : null}
                            </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchMain
