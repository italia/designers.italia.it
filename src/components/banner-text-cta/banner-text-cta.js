import React from "react"
import SimpleCta from "../simple-cta/simple-cta"
import "./banner-text-cta.scss"

const BannerTextCta = ({
  id,
  title,
  background,
  ctas,
  children
}) => {

let styles = "banner-text-cta"
+ `${background ? ' bg-'+background : ''}`

let ctaItems

  if (ctas) {
    ctaItems = ctas.map((item,index) => {
      return(
        <SimpleCta {...item} key={"cta-"+index}/>
      )
    })
  }

  return(
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 /**/ g-0">
            <div className="banner-text-cta-content px-4 py-5 px-lg-0 /*px-lg-6*/ px-lg-7 py-lg-6">
              <div className="text-zone">
                <h2 className="mb-5" id={id}>{title}</h2>
              </div>
              {children}
              <div className="cta-zone">
                {ctaItems && <div className="ctas mt-4 d-md-flex">{ctaItems}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerTextCta
