import React from "react"
import ReactMarkdown from "react-markdown"
import SimpleCta from "../simple-cta/simple-cta"
import "./text-image-cta.scss"

const TextImageCta =({
  title,
  headingLevel,
  text,
  image,
  alt,
  specular,
  ctas
}) => {


  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

  let ctaItems

  if (ctas) {
    ctaItems = ctas.map((item,index) => {
      return(
        <SimpleCta {...item} key={"cta-"+index}/>
      )
    })
  }

  let styles = "text-image-cta d-flex mb-5"
  + `${specular ? '' : ' flex-row-reverse'}`
  let imageWrapperStyles = "w-25 d-flex align-items-start"
  + `${specular ? ' justify-content-end me-4' : ' justify-content-start ms-4'}`
  let contentStyles = "content"
  + `${image ? ' w-75' : ' w-100'}`

  return (
    <div className={styles}>
      {image &&
        <div className={imageWrapperStyles}>
          <img src={image} alt={alt} className="w-100 img-fluid img-main"/>
        </div>
      }
      <div className={contentStyles}>
        {title && <HLevel className="h3 mb-3">{title}</HLevel>}
        {text && <ReactMarkdown>{text}</ReactMarkdown>}
        {ctaItems && <div className="ctas mt-4 d-md-flex">{ctaItems}</div>}
      </div>
    </div>
  )
}

export default TextImageCta
