import React from "react"
import ReactMarkdown from "react-markdown"
import "./section-intro.scss"

import ContentCollapse from "../content-collapse/contentCollapse"

const SectionIntro = ({
  id,
  background,
  title,
  subtitle,
  headingLevel,
  text,
  moreButton,
  moreButtonClose,
  moreText,
  isHome,
  children,
  isFull,
}) => {

  let styles = 'section-intro py-5'
	+ `${background ? ' bg-'+background : ''}`

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h2`
	}

  let cols
  let pad
  if (isHome) {
    cols = "col-12 g-0"
    pad = "px-3 px-lg-5"
  }else{
    // cols = "col col-md-10 offset-md-1 col-lg-7"
    // pad= "px-3 px-lg-0"
    cols = "col-12 col-lg-8 g-0"
    pad = "px-3 px-lg-5"
  }
  if (isFull) {
    cols = "col-12 g-0"
    pad = "px-3 px-lg-5"
    // cols= "col col-md-10 offset-md-1"
    // pad= "px-3 px-lg-0"
  }

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className={cols}>
              <div className={pad}>
                {title && <HLevel id={id} className="mb-2">{title}</HLevel>}
                {subtitle && <p className="lead font-sans-serif">{subtitle}</p>}
                <ReactMarkdown>{text}</ReactMarkdown>
                {children}
                {moreButton && <ContentCollapse label={moreButton} labelClose={moreButtonClose}>
                  { moreText }
                </ContentCollapse>}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionIntro
