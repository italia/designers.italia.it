import * as React from "react"
import "./hero.scss"

import ReactMarkdown from "react-markdown"
import ImageResponsive from "../image-responsive/image-responsive"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Dropdown from "../dropdown/dropdown"
import Icon from "../icon/icon"
import Tag from "../tag/tag"
import Kangaroo from "../kangaroo/kangaroo"

const Hero =({
  pageContext,
  name,
  centered,
  column,
	// breadcrumbs,
  reversedMobile,
	share,
	tag,
	background,
	title,
  titleTag,
  headingLevel,
	subtitle,
	pretext,
	text,
	img,
  alt,
  imgRatio,
	bgImg,
  bgImgAlt,
	kangaroo,
  noBorder
})=>{
  let styles = 'hero'
  + `${background ? ' bg-'+background : ''}`
  + `${column ? ' column-hero' : ''}`
  //heading level
	let HLevel
  let SubtitleLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
    SubtitleLevel = `h${headingLevel+1}`
	} else {
		HLevel = `h1`
    SubtitleLevel = `p`
	}

  let imgStyle = 'img-wrapper ratio mb-4 mb-lg-3'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`

  let rowStyle = 'row g-0'
		+ `${centered ? ' justify-content-lg-center' : ''}`
   
  let columnStyle = ' col-12 px-3 ps-lg-5 pe-lg-0 g-0' // col-md-10 offset-md-1'
		+ `${centered ? ' col-lg-7 offset-lg-0' : ' col-lg-7'}`

  let breadcrumbsStyle = 'hero-top px-3 pt-4'
    + `${column ? ' ' : ' px-lg-5 '}`

  let kangarooZoneStyle = 'kangaroo-zone'
  + `${noBorder ? ' no-border' : ''}`

  let kangarooColumnStyle = 'col-12 g-0' //col-12 col-md-10 offset-md-1'
  + `${centered ? ' col-lg-7 offset-lg-0 ' : ''}`

  let rightColumnStyle = "  col-12 col-md-12 col-lg-4 offset-lg-1 d-flex flex-column px-3 pe-lg-5 pt-4"

  if (column) {
    columnStyle = "px-3 col-12 col-md-8"
    kangarooColumnStyle = "col-12 g-0"
    rightColumnStyle = "col-12 col-md-3 offset-md-1 d-flex flex-column px-3 pe-lg-5 pt-md-4"
  }




	return(
		<div className={styles}>
      <div className="hero-content">
        {bgImg && <div className="bg-image"><ImageResponsive src={bgImg} alt={bgImgAlt}/></div>}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 g-0">
              <div className={breadcrumbsStyle}>
                <Breadcrumbs pageContext={pageContext} title={name} ></Breadcrumbs>
              </div>
              <div className="hero-main">
                <div className={rowStyle}>
                  <div className={columnStyle}>
                    <div className="texts py-3 pb-lg-5">
                      <div className="d-flex align-items-start flex-wrap">
                        <HLevel className="title">{title}</HLevel>
                        {titleTag && <Tag {...titleTag}></Tag>}
                      </div>
                      <SubtitleLevel className="subtitle fw-normal fs-10">{subtitle}</SubtitleLevel>
                      {tag && <Tag {...tag}></Tag>}
                      <div className="bottom-text">
                        {pretext && <div className="pre-text">
                          {pretext.icon && <Icon {...pretext.icon} addonClasses="me-2"></Icon>}
                          <span className="text-uppercase">{pretext.text}</span>
                        </div>}
                        {text && <ReactMarkdown>{text}</ReactMarkdown>}
                        {centered && <Dropdown {...share}></Dropdown>}
                      </div>
                    </div>
                  </div>
                  {!centered &&
                    // <div className="col-12 col-md-10 col-lg-3 offset-md-1 px-4 px-lg-2 d-flex flex-column">
                    <div className={rightColumnStyle}>
                      { img && <div className={imgStyle}>
                        <ImageResponsive src={img} alt={alt} />
                      </div>}
                      {share  && <Dropdown {...share}></Dropdown>}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {kangaroo &&
        <div className={kangarooZoneStyle}>
          <div className="container-xxl">
            <div className="row justify-content-lg-center">{/*rowStyle*/}
              <div className={kangarooColumnStyle}>
                <Kangaroo {...kangaroo}></Kangaroo>
              </div>
            </div>
          </div>
        </div>
      }
		</div>
	)
}

export default Hero
