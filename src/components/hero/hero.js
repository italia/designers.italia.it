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
  centered,
  column,
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

  let rowStyle = 'row'
		+ `${centered ? ' justify-content-lg-center' : ''}`

  let columnStyle = 'col-12 col-md-10 offset-md-1'
		+ `${centered ? ' col-lg-7 offset-lg-0' : ' col-lg-6'}`

  let breadcrumbsStyle = 'hero-top px-3 pt-3'
    + `${column ? ' px-lg-0' : ''}`

  let kangarooZoneStyle = 'kangaroo-zone'
  + `${noBorder ? ' no-border' : ''}`

  let kangarooColumnStyle = 'col-12 col-md-10 offset-md-1'
  + `${centered ? ' col-lg-7 offset-lg-0' : ''}`

  if (column) {
    columnStyle = "col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-0"
    kangarooColumnStyle = "col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-0"
  }

	return(
		<div className={styles}>
      <div className="hero-content">
        {bgImg && <div className="bg-image"><ImageResponsive src={bgImg} alt={bgImgAlt}/></div>}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={breadcrumbsStyle}>
                <Breadcrumbs {...breadcrumbs}></Breadcrumbs>
              </div>
              <div className="hero-main">
                <div className={rowStyle}>
                  <div className={columnStyle}>
                    <div className="texts px-3 px-lg-0 py-3 pb-lg-5">
                      <HLevel className="title">{title}</HLevel>
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
                    <div className="col-12 col-md-10 col-lg-3 offset-md-1 px-4 px-lg-2 d-flex flex-column">
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
            <div className={rowStyle}>
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
