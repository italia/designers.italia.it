import React, { useRef, useEffect } from "react"
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

  return (
    <section className={styles} aria-labelledby={id}>
      <div className="container-xxl">
        <div className="row">
          <div className='col col-md-10 offset-md-1 col-lg-7'>
              <div className="px-3 px-lg-0">
                {title && <HLevel id={id} className="mb-4">{title}</HLevel>}
                {subtitle && <h3 className="h5">{subtitle}</h3>}
                <ReactMarkdown>{text}</ReactMarkdown>

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
