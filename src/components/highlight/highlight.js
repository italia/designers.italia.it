import * as React from "react"
import './highlight.scss'
import Button from "../button/button"
import Icon from "../icon/icon"
import Numbers from "../numbers/numbers"
import ReactMarkdown from 'react-markdown'

const Highlight = (
	{
		background,
		img,
		icon,
		big,
		title,
    numbers,
		headingLevel,
		subtitle,
		text,
		buttons,
		specular
	}
) => {
	let styles = 'highlight'
	+ `${background ? ' highlight-'+background : ''}`

	//heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	}

	//buttons
	let ButtonsRender
	if (buttons) {
		ButtonsRender = buttons.map((btn,index) => {
			return(
			   <Button key={"button-"+index} {...btn}/>
			)
		})
	}

	return (
		<div className={styles}>
			<div className="highlight-content d-lg-flex">
				<div className="img-container ratio ratio-1x1">
					<img className="main-image" src={img} alt={title}/>
				</div>
				<div className="text-container">
					<HLevel>{title}</HLevel>
          {subtitle && <p className="sub-title mb-4">{subtitle}</p>}
          <Numbers props={numbers}/>
					{text && <div className="h-text font-serif"><ReactMarkdown>{text}</ReactMarkdown></div>}
					{ButtonsRender && <div className="buttons-wrapper">{ButtonsRender}</div>}
				</div>
			</div>
		</div>
	)
}

export default Highlight
