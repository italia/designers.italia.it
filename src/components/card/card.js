import * as React from "react"
import ReactMarkdown from 'react-markdown'
import SimpleCta from "../simple-cta/simple-cta"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"
import './card.scss'

const Card =(
	{
		title,
		headingLevel,
		url,
		text,
		tag,
		share,
		img,
		imgRatio,
		iconOverlay,
		date,
		dateOverlay,
		day,
		month,
		chips,
		externalLink,
		author,
		imgPlaceholder
	}
)=>{
	let styles = 'di-card'
	let imgStyle = 'img-wrapper ratio'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`

	//heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

	return(
		<div className={styles}>
			{(img || imgPlaceholder) && <div className={imgStyle}>
				{img && !imgPlaceholder && <img src={img} alt={title}/>}
			</div>}
			<div className="di-card-body p-4">
				<div className="text-zone">
					{HLevel && <HLevel><a href={url}>{title}</a></HLevel>}
					{externalLink && <SimpleCta {...externalLink}></SimpleCta>}
					{author && <span className="author font-monospace">{author}</span>}
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
						{share && <Dropdown {...share}></Dropdown>}
					</div>
				</div>}
			</div>
		</div>
	)
}

export default Card