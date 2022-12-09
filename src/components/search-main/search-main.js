import * as React from "react"
import ReactMarkdown from "react-markdown"
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
                <form id={formId}  aria-disabled="true" action={formAction} method="post">
                    <div className="d-flex flex-column align-items-center flex-md-row w-100">
                      <div className="form-group mb-0 flex-grow-1 me-md-4 w-100">
                        <label className="active /*search-disabled*/" htmlFor={inputId}>{label}</label>
                        <input type="search" aria-disabled="true" className="form-control-plaintext border-search-disabled search-disabled" name={inputName} id={inputId} value="Voglio progettare con Qualità" disabled/>
                      </div>
                      <div className="button-wrapper mt-4 mt-md-0">
                        <Button {...button}></Button>
                      </div>
                    </div>
                </form>
              </div>
              <div className="suggest-wrapper d-lg-flex">
                <h3 className="mb-4 /*search-disabled*/">{suggest.title}</h3>
                  {suggest.items && <div className="items-wrapper d-flex flex-wrap ms-lg-5 mt-2">
                    <ul className="list-inline d-flex flex-wrap">
                      { suggest.items.map((item,index) => {
                        return(
                          <li className="list-item me-5 mb-3 /*search-disabled*/ text-decoration-underline" key={"li"+index}><span /*href={item.url}*/>{item.label}</span></li>  
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
