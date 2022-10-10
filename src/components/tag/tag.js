import * as React from "react"
import './tag.scss'

const Tag = ({
	url,
	children,
	label,
  addonClasses
}) => {
	if (label) {
		children = label
	}
  let styles = "tag"
    + `${addonClasses ? ' '+addonClasses : ''}`
	return(
		<a href={url} className={styles}>
			{children}
		</a>
	)
}

export default Tag
