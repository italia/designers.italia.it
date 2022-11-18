import * as React from "react"
import './highlight.scss'
import ImageResponsive from "../image-responsive/image-responsive"
import Button from "../button/button"
import Icon from "../icon/icon"
import Numbers from "../numbers/numbers"
import ReactMarkdown from "react-markdown"

const Highlight = (
	{
		id,
		background,
		img,
    alt,
		icon,
    overlayImg,
    overlayAlt,
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
			   <Button key={"h-button-"+index} {...btn}/>
			)
		})
	}

	return (
		<section className={styles} aria-labelledby={id}>
			<div className="container-xxl">
				<div className="row">
					<div className="col-12">
						<div className={classes}>
							<div className="img-container ratio ratio-16x9">
								<ImageResponsive className="main-image" src={img} alt={alt}/>
								{icon && <Icon {...icon}/>}
                {overlayImg && <ImageResponsive src={overlayImg} alt={overlayAlt} className="overlay-image"/>}
							</div>
							<div className="text-container px-3 py-5 px-lg-0 px-lg-6 py-lg-6">
								<HLevel id={id}>{title}</HLevel>
								{subtitle && <p className="sub-title mb-4">{subtitle}</p>}
                {numbers && <Numbers {...numbers}/>}
								{text && <div className="h-text font-serif"><ReactMarkdown>{text}</ReactMarkdown></div>}
								{ButtonsRender && <div className="buttons-wrapper mt-5">{ButtonsRender}</div>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Highlight
