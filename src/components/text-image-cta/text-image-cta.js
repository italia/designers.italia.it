import React from "react"
import ReactMarkdown from "react-markdown"
import SimpleCta from "../simple-cta/simple-cta"
import "./text-image-cta.scss"

import ImageResponsive from "../image-responsive/image-responsive"
import ContentCollapse from "../content-collapse/contentCollapse"

function TextImageCta({
  title,
  headingLevel,
  lead,
  text,
  image,
  alt,
  specular,
  ctas,
  noSpace,
  moreButton,
  moreButtonClose,
  moreText
}) {


  // heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

  let ctaItems

  if (ctas) {
    ctaItems = ctas.map((item,index) => (
        <SimpleCta {...item} key={`cta-${index}`}/>
      ))
  }

  const styles = "text-image-cta d-flex"
  + `${noSpace ? ' mb-0' : ' mb-5 /*mb-lg-5*/'}`
  + `${image && specular ? ' flex-column flex-sm-row' : ''}` 
  + `${image && !specular ? ' flex-column flex-sm-row-reverse' : ''}` 
  const imageWrapperStyles = "image-cta w-25 d-flex align-items-start"
  + `${specular ? ' justify-content-end me-4' : ' justify-content-start ms-sm-4'}`
  const contentStyles = "content"
  + `${image ? ' w-75 pt-4 pt-sm-0' : ' w-100'}`

  return (
    <div className={styles}>
      {image &&
        <div className={imageWrapperStyles}>
          <ImageResponsive src={image} alt={alt} imgClassName="w-100 img-fluid img-main rounded"/>
        </div>
      }
      <div className={contentStyles}>
        {title && <HLevel className="/*mb-3*/">{title}</HLevel>}
        {lead && <p className="lead font-sans-serif">{lead}</p>}
        {text && <ReactMarkdown>{text}</ReactMarkdown>}
        {moreButton && <ContentCollapse label={moreButton} labelClose={moreButtonClose}>
                  { moreText }
                </ContentCollapse>}
        {ctaItems && <div className="ctas mt-4 d-md-flex">{ctaItems}</div>}
      </div>
    </div>
  )
}

export default TextImageCta
