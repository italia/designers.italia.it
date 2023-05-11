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
        <div className="container-xxl pt-5 pb-5 mb-5 pt-lg-6 pb-lg-6">
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
            <div className="col-lg-7 col-12">
              <h1>Un imprevisto può capitare</h1>
              <div className="lead">
                <p>
                  Non abbiamo trovato la pagina che cercavi.
                </p>

                <p>
                  Verifica che l’indirizzo sia corretto oppure torna all’inizio per
                  esplorare altri contenuti.
                </p>
                <Button btnStyle="primary" url="/"><strong>Vai all’inizio</strong></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
