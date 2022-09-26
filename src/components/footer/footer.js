import React from "react"
import "./footer.scss"

const Footer = ({ data }) => {
  function sub(boolean){
    if(boolean) {
      return (
        <h3 className="d-none d-md-block">{boolean}</h3>
      )
    }
  }
  return (
    <footer className="it-footer">
        <div className="it-footer-main">
	        <div className="container">
            <section>
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="it-brand-wrapper">
                    <a href={data.footerMain.brand.url} data-focus-mouse="false">
                      <img src={data.footerMain.brand.img} alt={data.footerMain.brand.title}/>
                      <div className="it-brand-text">
                        <h2>{data.footerMain.brand.title}</h2>
                        {sub(data.footerMain.brand.subtitle)}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    </footer>
  )
}

export default Footer
