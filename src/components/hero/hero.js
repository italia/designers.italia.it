import * as React from "react"
import "./hero.scss"

import ReactMarkdown from "react-markdown"
import ImageResponsive from "../image-responsive/image-responsive"
import Breadcrumbs from "../breadcrumbs/breadcrumbs"
import Icon from "../icon/icon"
import ShareButton from "../share-button/share-button"
import Tag from "../tag/tag"
import Kangaroo from "../kangaroo/kangaroo"

const Hero = ({
  pageContext,
  name,
  crumbLabel,
  centered,
  column,
  specialKangarooComponent,
  // breadcrumbs,
  reversedMobile,
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
}) => {
  let styles = 'hero'
    + `${background ? ' bg-' + background : ''}`
    + `${column ? ' column-hero' : ''}`
  //heading level
  let HLevel
  let SubtitleLevel
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
    SubtitleLevel = `h${headingLevel + 1}`
  } else {
    HLevel = `h1`
    SubtitleLevel = `p`
  }

  let textStyle = "texts py-3"
    + `${centered ? ' pb-lg-4' : ' pb-lg-5'}`

  let imgStyle = 'img-wrapper ratio mb-4 mb-lg-3 rounded'
    + `${imgRatio ? ' ratio-' + imgRatio : ''}`

  let imgResponsiveStyle = 'rounded'

  let rowStyle = 'row g-0'
    + `${centered ? ' justify-content-lg-center' : ''}`

  let columnStyle = ' col-12 g-0 px-3' // col-md-10 offset-md-1'
    + `${centered ? ' col-lg-7 offset-lg-0' : ' ps-lg-5 pe-lg-0 col-lg-7'}`

  let breadcrumbsStyle = 'hero-top px-3 pt-4'
    + `${column ? ' ' : ' px-lg-5 '}`

  let kangarooZoneStyle = 'kangaroo-zone'
    + `${noBorder ? ' no-border' : ''}`
    + `${specialKangarooComponent ? ' pb-4 pb-md-5 pb-lg-0' : ''}`

  let kangarooColumnStyle = 'col-12 g-0' //col-12 col-md-10 offset-md-1'
    + `${centered ? ' col-lg-7 offset-lg-0 ' : ''}`

  let rightColumnStyle = "  col-12 col-md-12 col-lg-4 offset-lg-1 d-flex flex-column px-3 pe-lg-5 pt-4"

  if (column) {
    columnStyle = "px-3 col-12 col-md-8"
    kangarooColumnStyle = "col-12 g-0"
    rightColumnStyle = "col-12 col-md-3 offset-md-1 d-flex flex-column px-3 pe-lg-5 pt-md-4"
  }

  const shareColor = background === 'light' ? 'primary' : 'white'
  const url = pageContext.breadcrumb.location

  return (
    <div className={styles}>
      <div className="hero-content">
        {/* {bgImg && <div className="bg-image"><ImageResponsive src={bgImg} alt={bgImgAlt}/></div>} */}
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 g-0">
              <div className={breadcrumbsStyle}>
                {crumbLabel ? (
                  <Breadcrumbs pageContext={pageContext} crumbLabel={crumbLabel} title={name} ></Breadcrumbs> 
                ) : (
                  <Breadcrumbs pageContext={pageContext} title={name} ></Breadcrumbs>
                )}
              </div>
              <div className="hero-main">
                <div className={rowStyle}>
                  <div className={columnStyle}>
                    <div className={textStyle}>
                      <div className="d-flex align-items-start flex-wrap">
                        <HLevel className="title">{title}</HLevel>
                        {titleTag && <Tag {...titleTag}></Tag>}
                      </div>
                      <SubtitleLevel className="subtitle fw-normal fs-10">{subtitle}</SubtitleLevel>
                      {tag && <Tag {...tag}></Tag>}
                      {pretext &&
                        <div className="bottom-text">
                          <div className="pre-text">
                            {pretext.icon && <Icon {...pretext.icon} addonClasses="me-2"></Icon>}
                            <span className="text-uppercase">{pretext.text}</span>
                          </div>
                          {text && <ReactMarkdown>{text}</ReactMarkdown>}
                        </div>
                      }
                    </div>
                    {centered && <ShareButton title={title} url={url} color={shareColor} />}
                    {kangaroo && specialKangarooComponent &&
                      <div className="">
                        <div className={kangarooZoneStyle}>
                          <div className="container-xxl">
                            <div className="row justify-content-lg-center">{/*rowStyle*/}
                              <div className={kangarooColumnStyle}>
                                <Kangaroo {...kangaroo}></Kangaroo>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  {!centered &&
                    // <div className="col-12 col-md-10 col-lg-3 offset-md-1 px-4 px-lg-2 d-flex flex-column">
                    <div className={rightColumnStyle}>
                      {img && <div className={imgStyle}>
                        <ImageResponsive src={img} alt={alt} imgClassName={imgResponsiveStyle} />
                      </div>}
                      {<ShareButton title={title} url={url} color={shareColor} />}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {kangaroo && !specialKangarooComponent &&
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
