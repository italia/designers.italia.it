import * as React from "react"
import ReactMarkdown from "react-markdown"
import ImageResponsive from "../image-responsive/image-responsive"
import SimpleCta from "../simple-cta/simple-cta"
import Chip from "../chip/chip"
import Tag from "../tag/tag"
import Icon from "../icon/icon"
import Link from "../link/link"
import Button from "../button/button"
import ShareButton from "../share-button/share-button"

import "./card.scss"

const Card = (
  {
    cardEvent,
    title,
    titleSmall,
    titleBig,
    headingLevel,
    url,
    blank,
    text,
    textSerif,
    tag,
    share,
    img,
    imgRounded,
    noShadow,
    alt,
    imgRatio,
    iconOverlay,
    dateOverlay,
    chips,
    tags,
    externalLink,
    moreInfo,
    dateInfo,
    imgPlaceholder,
    iconImg,
    iconImgAlt,
    fullHeight,
    rounded,
    buttonBottom
  }
) => {
  let styles = 'di-card d-md-flex flex-md-column w-100'
    + `${fullHeight ? ' fullheight' : ''}`
    + `${rounded ? ' rounded' : ''}`
    + `${titleSmall ? ' title-small' : ''}`
    + `${titleBig ? ' title-big' : ''}`
    + `${noShadow ? ' shadow-none' : ''}`
    + `${textSerif ? ' text-serif' : ''}`
    + `${buttonBottom ? ' has-button' : ''}`

  let imgStyle = 'img-wrapper ratio'
    + `${imgRatio ? ' ratio-' + imgRatio : ''}`
    + `${imgPlaceholder ? ' img-placeholder' : ''}`
    + `${iconImg ? ' icon-img' : ''}`
    + `${cardEvent ? ' mb-4 negative-margin' : ''}`
    + `${imgRounded ? ' rounded' : ''}`

  let styleBody = 'di-card-body bg-white p-4 d-md-flex flex-md-column justify-content-between'
    + `${rounded ? ' rounded' : ''}`

  //heading level
  let HLevel
  if (headingLevel) {
    HLevel = `h${headingLevel}`;
  } else {
    HLevel = `h3`
  }
  if (cardEvent) {
    return (
      <div className={styles}>
        <div className={styleBody}>
          <div className="text-zone">
            {HLevel && <HLevel><Link to={url} target={blank ? '_blank' : undefined}>{title}{(externalLink && !externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}</Link></HLevel>}
            {dateInfo && <span className="date-info font-monospace mb-3">{dateInfo}</span>}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
            {(externalLink && externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}
            {moreInfo && <span className="more-info font-monospace">{moreInfo}</span>}
          </div>
          {<div className="di-card-footer">
            <div className={imgStyle}>
              {img && !imgPlaceholder && <ImageResponsive src={img} alt={alt} />}
              {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
              {dateOverlay && <div className="date-overlay d-flex flex-column justify-content-center">
                <span className="day font-monospace">{dateOverlay.day}</span>
                <span className="month">{dateOverlay.month}</span>
                <span className="month">{dateOverlay.year}</span>
              </div>}
              {iconOverlay && <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
                <Icon {...iconOverlay}></Icon>
              </div>}
            </div>
            <div className="di-card-footer-content d-flex justify-content-between align-items-end">
              {tags && <div className="chip-container">
                {tags.map((tag, index) => {
                  return (
                    <Chip key={"chip-" + index} label={tag} size="sm" />
                  )
                })}
              </div>}
              {tag && <div className="tag-container">
                <Tag {...tag}></Tag>
              </div>}
              { }
              {url && <ShareButton url={url} title={title} small={true} />}
            </div>
          </div>}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles}>
        {(img || imgPlaceholder || iconImg) && <div className={imgStyle}>
          {img && !imgPlaceholder && <ImageResponsive src={img} alt={alt} />}
          {iconImg && <ImageResponsive src={iconImg} alt={iconImgAlt} />}
          {dateOverlay && <div className="date-overlay d-flex flex-column justify-content-center">
            <span className="day font-monospace">{dateOverlay.day}</span>
            <span className="month">{dateOverlay.month}</span>
          </div>}
          {iconOverlay && <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
            <Icon {...iconOverlay}></Icon>
          </div>}
        </div>}
        <div className={styleBody}>
          <div className="text-zone">
            {HLevel && <HLevel><Link to={url} target={blank ? '_blank' : undefined}>{title}{(externalLink && !externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}</Link></HLevel>}
            {dateInfo && <span className="date-info font-monospace mb-3">{dateInfo}</span>}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
            {(externalLink && externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}
            {moreInfo && <span className="more-info font-monospace">{moreInfo}</span>}
            {buttonBottom &&
              <div className="button-wrapper mt-4">
                <Button {...buttonBottom}></Button>
              </div>
            }
          </div>
          {(tag || tags || share || chips) && <div className="di-card-footer">
            <div className="di-card-footer-content d-flex justify-content-between align-items-end">
              {tags && <div className="chip-container">
                {tags.map((tag, index) => {
                  return (
                    <Chip key={"chip-" + index} label={tag} size="sm" color="secondary" />
                  )
                })}
              </div>}
              {tag && <div className="tag-container">
                <Tag {...tag}></Tag>
              </div>}
              {url && <ShareButton url={url} title={title} small={true} />}
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default Card
