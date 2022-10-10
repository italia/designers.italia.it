import * as React from "react"
import './hero.scss'
import ReactMarkdown from 'react-markdown'
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Dropdown from "../dropdown/dropdown"
import Icon from "../icon/icon"

const Hero =({
	breadcrumbs,
	share,
	tag,
	background,
	title,
  headingLevel,
	subtitle,
	pretext,
	text,
	img,
  imgRatio,
	bgImg,
	Kangaroo

})=>{
  let styles = 'hero'
  + `${background ? ' '+background : ''}`
  //heading level
	let HLevel
  let SubtitleLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
    SubtitleLevel = `h${headingLevel+1}`
	} else {
		HLevel = `h1`
    SubtitleLevel = `h2`
	}

  let imgStyle = 'img-wrapper ratio'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`

	return(
		<div className={styles}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-top px-3 px-md-0 px-lg-3 py-3">
              <Breadcrumbs {...breadcrumbs}></Breadcrumbs>
              {share  && <Dropdown {...share}></Dropdown>}
            </div>
            <div className="hero-main">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-1 ">
                  <div className="texts px-3 px-md-0 py-3 pb-lg-5">
                    <HLevel className="title">{title}</HLevel>
                    <SubtitleLevel className="subtitle fw-normal fs-10">{subtitle}</SubtitleLevel>
                    <div className="bottom-text">
                      {pretext && <div className="pre-text">
                        {pretext.icon && <Icon {...pretext.icon} addonClasses="me-2"></Icon>}
                        <span>{pretext.text}</span>
                      </div>}
                      {text && <ReactMarkdown>{text}</ReactMarkdown>}
                    </div>
                  </div>
                </div>
                {img &&
                  <div className="col-12 col-lg-3 offset-lg-1 px-4 px-lg-0">
                    <div className={imgStyle}>
                      <img src={img} alt={title} />
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Hero
