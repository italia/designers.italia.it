import * as React from "react"
import Icon from "../icon/icon"
import Link from "../link/link"
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
		{ url && <Link className="simple-cta py-1 mb-3" to={url} target={blank ? '_blank' : undefined}>
			<span className="text">{children}</span>
			<span className="visually-hidden">{screenReaderText}</span>
			<Icon {...icon}></Icon>
		</Link>}
    { !url && <span className="simple-cta py-1 mb-3">
			<span className="text">{children}</span>
			<span className="visually-hidden">{screenReaderText}</span>
			<Icon {...icon}></Icon>
		</span>}
    </>
	)
}

export default SimpleCta
