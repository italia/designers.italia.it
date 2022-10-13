import * as React from "react"
import './highlight.scss'
import Button from "../button/button"
import Icon from "../icon/icon"
import Numbers from "../numbers/numbers"
import ReactMarkdown from "react-markdown"

const Highlight = (
	{
		id,
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
	+ `${background ? ' bg-'+background : ''}`
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
		<section className={styles} aria-labelledby={id}>
			<div className="container-xxl">
				<div className="row">
					<div className="col-12">
						<div className={classes}>
							<div className="img-container ratio ratio-1x1">
								<img className="main-image" src={img} alt={title}/>
								{icon && <Icon {...icon} classdName="translate-middle"/>}
							</div>
							<div className="text-container px-3 py-5 px-md-0 px-lg-10 py-lg-10">
								<HLevel id={id}>{title}</HLevel>
								{subtitle && <p className="sub-title">{subtitle}</p>}
                			{!big && <Numbers props={numbers}/>}
								{text && !big && <div className="h-text font-serif"><ReactMarkdown>{text}</ReactMarkdown></div>}
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
