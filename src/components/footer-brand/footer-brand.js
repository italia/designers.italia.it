import React from "react"
import ReactMarkdown from "react-markdown"
import "./footer-brand.scss"

const FooterBrand = ({
  background,
  title,
  justifyLogos,
  logos
}) => {
  let styles = 'footer-brand pt-5 pb-4'
    + `${background ? ' bg-'+background : ''}`
    + `${background === "dark" || background === "primary" ? ' text-white' : ''}`

  let logosStyles = 'logos list-unstyled d-flex flex-column flex-md-row flex-wrap align-items-center mb-0'
    + `${justifyLogos ? ' justify-content-md-between' : ''}`

  return (
    <div className={styles}>
      <div className="container-xxl">
        <div className="row">
          <div className="col text-center text-md-start">
            <ReactMarkdown className="small mb-4">{title}</ReactMarkdown>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className={logosStyles}>
              {logos.map((value,index)=>{
                return(
                  <li key={"item-"+index} className="mb-5 me-md-5 ">
                    <a
                      href={value.url}
                      target={value.blank ? "_blank" : undefined}
                      className="d-block"
                    >
                      <img src={value.img} alt={value.title} className={value.small ? "small" : undefined}/>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBrand
