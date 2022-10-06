import * as React from "react"
import ReactMarkdown from 'react-markdown'
import './card.scss'

const Card =(
	{
		title,
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
		extLinkLabel,
		extLinkUrl,
		author,
		imgPlaceholder
	}
)=>{
	let styles = 'di-card'
	let imgStyle = 'img-wrapper ratio'
		+ `${imgRatio ? ' ratio-'+imgRatio : ''}`
	return(
		<div className={styles}>
			{(img || imgPlaceholder) && <div className={imgStyle}>
				{img && !imgPlaceholder && <img src={img} alt={title}/>}
			</div>}
			<div className="di-card-body">

			</div>
		</div>
	)
}

export default Card