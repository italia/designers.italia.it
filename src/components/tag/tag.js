import * as React from "react"
import './tag.scss'

const Tag = ({
	url,
	children,
	label
}) => {
	if (label) {
		children = label
	}
	return(
		<a href={url} className="tag">
			{children}
		</a>
	)
}

export default Tag