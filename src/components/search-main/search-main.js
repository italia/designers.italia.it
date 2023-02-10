import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

// import ReactMarkdown from "react-markdown"
import Button from "../button/button"
import './search-main.scss'
const SearchMain =({
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
  const [input, setInput] = useState(null)
  const [searchTerm, setSearchTerm] = useState(null)
  const { localSearchPages: { index, store } } = useStaticQuery(graphql`
     query {
       localSearchPages {
         index
         store
       }
     }
  `)

  const search = (ev) => {
    ev.preventDefault()
    setSearchTerm(input)
    console.log(index, store)
  }

  const results = useFlexSearch(searchTerm, index, store)

  let styles = 'search-main'
	+ `${background ? ' bg-'+background : ''}`
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
                <form id={formId} onSubmit={ev => search(ev)}>
                    <div className="d-flex flex-column align-items-center flex-md-row w-100">
                      <div className="form-group mb-0 flex-grow-1 me-md-4 w-100">
                        <label className="active" htmlFor={inputId}>{label}</label>
                        <input type="search" className="border-search search" name={inputName} id={inputId} placeholder="Voglio progettare con Qualità" onChange={ev => setInput(ev.target.value)}/>
                      </div>
                      <div className="button-wrapper mt-4 mt-md-0">
                        <Button type="submit" {...button}></Button>
                      </div>
                    </div>
                    <ul>{results.map((r, i) => (
                      <li key={i}>
                        <Link to={r.relativePath}>{r.relativePath}</Link>
                      </li>
                    ))}</ul>
                </form>
              </div>
              <div className="suggest-wrapper d-lg-flex">
                <h3 className="mb-4">{suggest.title}</h3>
                  {suggest.items && <div className="items-wrapper d-flex flex-wrap ms-lg-5 mt-2">
                    <ul className="list-inline d-flex flex-wrap">
                      { suggest.items.map((item,index) => {
                        return(
                          <li className="list-item me-5 mb-3 text-decoration-underline" key={"li"+index}><span /*href={item.url}*/>{item.label}</span></li>
                        ) /* use <a href={item.url} instead of <span to activate */
                    })}
                  </ul>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchMain
