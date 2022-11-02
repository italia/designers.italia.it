import * as React from "react"
import "./hero.scss"
import ReactMarkdown from "react-markdown"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Dropdown from "../dropdown/dropdown"
import Icon from "../icon/icon"
import Tag from "../tag/tag"
import Kangaroo from "../kangaroo/kangaroo"

const Hero =({
  centered,
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
	kangaroo
})=>{
  let styles = 'hero'
  + `${background ? ' bg-'+background : ''}`
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

  let imgStyle = 'img-wrapper ratio mb-3 mb-lg-auto'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`

  let rowStyle = 'row'
		+ `${centered ? ' justify-content-lg-center' : ''}`

  let columnStyle = 'col-12 col-md-10 offset-md-1'
		+ `${centered ? ' col-lg-7 offset-lg-0' : ' col-lg-6'}`

    let kangarooColumnStyle = 'col-12 col-md-10 offset-md-1'
		+ `${centered ? ' col-lg-7 offset-lg-0' : ''}`


	return(
		<div className={styles}>
      <div className="hero-content">
        {bgImg && <div className="bg-image"><img src={bgImg} alt={title}/></div>}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="hero-top px-3 px-lg-0 px-lg-3 py-3">
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
                    <div className="col-12 col-md-10 col-lg-3 offset-md-1 px-4 px-md-2 px-lg-2 d-flex flex-column">
                      <div className={imgStyle}>
                        <img src={img} alt={title} />
                      </div>
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
        <div className="kangaroo-zone">
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
