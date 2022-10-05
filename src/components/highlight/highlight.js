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
	+ `${big ? ' highlight-big' : ''}`

	let classes = 'highlight-content d-lg-flex'
	+ `${specular ? ' flex-lg-row-reverse' : ''}`

	//heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
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
		<section className={styles} aria-labelled-by={title}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className={classes}>
							<div className="img-container ratio ratio-1x1">
								<img className="main-image" src={img} alt={title}/>
							</div>
							<div className="text-container">
								<HLevel>{title}</HLevel>
								{subtitle && !big && <p className="sub-title">{subtitle}</p>}
                <Numbers props={numbers}/>
								{text && <div className="h-text font-serif"><ReactMarkdown>{text}</ReactMarkdown></div>}
								{ButtonsRender && <div className="buttons-wrapper">{ButtonsRender}</div>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Highlight
