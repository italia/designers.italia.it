import * as React from "react"
import ReactMarkdown from "react-markdown"
import SimpleCta from "../simple-cta/simple-cta"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"
import Tag from "../tag/tag"
import Icon from "../icon/icon"
import "./card.scss"

const Card =(
	{
    cardEvent,
		title,
    titleSmall,
		headingLevel,
		url,
    blank,
		text,
		tag,
		share,
		img,
		imgRatio,
		iconOverlay,
		date,
		dateOverlay,
		chips,
		externalLink,
		moreInfo,
		imgPlaceholder,
		iconImg,
    fullHeight,
    rounded
	}
)=>{
	let styles = 'di-card d-md-flex flex-md-column w-100'
    + `${fullHeight ? ' fullheight' : ''}`
    + `${rounded ? ' rounded' : ''}`
    + `${titleSmall ? ' title-small' : ''}`
	let imgStyle = 'img-wrapper ratio'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`
		+ `${imgPlaceholder ? ' img-placeholder' : ''}`
		+ `${iconImg ? ' icon-img' : ''}`
    + `${cardEvent ? ' mb-4 negative-margin' : ''}`


	//heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}
  if (cardEvent) {
    return(
      <div className={styles}>
        <div className="di-card-body bg-white p-4 d-md-flex flex-md-column justify-content-between">
          <div className="text-zone">
            {HLevel && <HLevel><a href={url} target={blank ? '_blank' : undefined}>{title}{(externalLink && !externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}</a></HLevel>}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
            {(externalLink && externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}
            {moreInfo && <span className="author font-monospace">{moreInfo}</span>}
          </div>
          {(tag || share || chips || img) && <div className="di-card-footer">
            {(img || imgPlaceholder || iconImg) && <div className={imgStyle}>
              {img && !imgPlaceholder && <img src={img} alt={title}/>}
              {iconImg && <img src={iconImg} alt={title}/>}
              {dateOverlay && <div className="date-overlay d-flex flex-column justify-content-center">
                <span className="day font-monospace">{dateOverlay.day}</span>
                <span className="month">{dateOverlay.month}</span>
              </div>}
              {iconOverlay && <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
                <Icon {...iconOverlay}></Icon>
              </div>}
            </div>}
            <div className="di-card-footer-content d-flex justify-content-between align-items-end">
              {chips && <div className="chip-container">
                { chips.map((chip,index) => {
                  return(
                    <Chip key={"chip-"+index} {...chip}/>
                  )
                })}
              </div>}
              {tag && <div className="tag-container">
                <Tag {...tag}></Tag>
              </div>}
              {share && <Dropdown {...share}></Dropdown>}
            </div>
          </div>}
        </div>
      </div>
    )
  }else{
    return(
      <div className={styles}>
        {(img || imgPlaceholder || iconImg) && <div className={imgStyle}>
          {img && !imgPlaceholder && <img src={img} alt={title}/>}
          {iconImg && <img src={iconImg} alt={title}/>}
          {dateOverlay && <div className="date-overlay d-flex flex-column justify-content-center">
            <span className="day font-monospace">{dateOverlay.day}</span>
            <span className="month">{dateOverlay.month}</span>
          </div>}
          {iconOverlay && <div className="icon-overlay d-flex flex-column justify-content-center align-items-center">
            <Icon {...iconOverlay}></Icon>
          </div>}
        </div>}
        <div className="di-card-body bg-white p-4 d-md-flex flex-md-column justify-content-between">
          <div className="text-zone">
            {HLevel && <HLevel><a href={url} target={blank ? '_blank' : undefined}>{title}{(externalLink && !externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}</a></HLevel>}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
            {(externalLink && externalLink.url) && <SimpleCta {...externalLink}></SimpleCta>}
            {moreInfo && <span className="author font-monospace">{moreInfo}</span>}
          </div>
          {(tag || share || chips) && <div className="di-card-footer">
            <div className="di-card-footer-content d-flex justify-content-between align-items-end">
              {chips && <div className="chip-container">
                { chips.map((chip,index) => {
                  return(
                    <Chip key={"chip-"+index} {...chip}/>
                  )
                })}
              </div>}
              {tag && <div className="tag-container">
                <Tag {...tag}></Tag>
              </div>}
              {share && <Dropdown {...share}></Dropdown>}
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default Card
