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
          <div className="col-12">
            <div className="search-main-content px-3 py-5 px-lg-0 px-lg-6 py-lg-6">
              <div className="text-container mb-5">
                {title && <h2>{title}</h2>}
                {text && <ReactMarkdown>{text}</ReactMarkdown>}
              </div>
              <div className="search-form px-4 pb-4 mb-5 shadow-lg">
                <form id={formId} action={formAction} method="post">
                    <div className="d-flex flex-column align-items-center flex-md-row w-100">
                      <div class="form-group mb-0 flex-grow-1 me-md-4 w-100">
                        <label className="active" for={inputId}>{label}</label>
                        <input type="search" className="form-control" name={inputName} id={inputId}/>
                      </div>
                      <div className="button-wrapper mt-4 mt-md-0">
                        <Button {...button}></Button>
                      </div>
                    </div>
                </form>
              </div>
              <div className="suggest-wrapper d-lg-flex">
                <h3 class="mb-4">{suggest.title}</h3>
                {suggest.items && <div className="items-wrapper d-flex flex-wrap ms-lg-5 mt-2">
                  { suggest.items.map((item,index) => {
                    return(
                      <a className="me-5 mb-3" key={"a"+index} href={item.url}>{item.label}</a>
                    )
                  })}
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
