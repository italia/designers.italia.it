import * as React from "react"
import Icon from "../icon/icon"
import './simple-cta.scss'

const SimpleCta = ({
	icon,
	children,
	label,
	url,
	blank,
	screenReaderText
}) =>{
	if (label) {
		children = label
	}
	return(
    <>
		{ url && <a className="simple-cta" href={url} target={blank ? '_blank' : undefined}>
			<span className="text">{children}</span>
			<span className="visually-hidden">{screenReaderText}</span>
			<Icon {...icon}></Icon>
		</a>}
    { !url && <span className="simple-cta">
			<span className="text">{children}</span>
			<span className="visually-hidden">{screenReaderText}</span>
			<Icon {...icon}></Icon>
		</span>}
    </>
	)
}

export default SimpleCta
