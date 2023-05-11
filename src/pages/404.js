import * as React from "react"

import Button from "../components/button/button"
import ImageResponsive from "../components/image-responsive/image-responsive"

import Template from "../templates/base"

import "../scss/404.scss"

const animate = (ev) => {
  ev.target.classList.add("animate")
}

const NotFoundPage = () => {
  return (
    <Template>
      <section>
        <div className="container-xxl py-5 mb-5 pt-lg-6 pb-lg-6">
          <div className="row">
            <div className="col-lg-4 col-12 pb-3 text-center">
              <ImageResponsive
                onMouseOver={animate}
                onTouchStart={animate}
                imgClassName="logo"
                src="/static/images/404-logo.svg"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-12 hero">
              <h1>Un imprevisto può capitare</h1>
              <div className="lead mb-4">
                <p>
                  Non abbiamo trovato la pagina che cercavi.
                </p>

                <p className="pb-3">
                  Verifica che l’indirizzo sia corretto oppure torna all’inizio per
                  esplorare altri contenuti.
                </p>
                <div className="buttons-wrapper mt-5 d-grid d-md-block">
                  <Button btnStyle="btn btn-primary mb-0" url="/"><strong>Vai all’inizio</strong></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}

export default NotFoundPage

export const Head = () => <title>Un imprevisto può capitare - Designers Italia</title>
