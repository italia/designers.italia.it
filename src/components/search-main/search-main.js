import * as React from "react"
import ReactMarkdown from "react-markdown"
import Button from "../button/button"

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
  return (
    <section className="search-main">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="search-main-content">
              <div className="text-container">
                {title && <h2>{title}</h2>}
                {text && <ReactMarkdown>{text}</ReactMarkdown>}
                <div className="search-form">
                  <form id={formId} action={formAction} method="post">
                      <div className="d-flex align-items-center">
                        <div class="form-group mb-0 flex-grow-1 me-4">
                          <label className="active" for={inputId}>{label}</label>
                          <input type="search" class="form-control" name={inputName} id={inputId}/>
                        </div>
                        <Button {...button}></Button>
                      </div>
                  </form>
                </div>
                <div className="suggest-wrapper">
                  <h3>{suggest.title}</h3>
                  {suggest.items && <div className="items-wrapper">

                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchMain
