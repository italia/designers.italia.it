import * as React from "react"
import './tag.scss'

const Tag = ({
	url,
	children,
	label,
  addonClasses,
  screenReaderText
}) => {
	if (label) {
		children = label
	}
  let styles = "tag"
    + `${addonClasses ? ' '+addonClasses : ''}`
	return(
		<a href={url} className={styles}>
			<span className="visually-hidden">{screenReaderText}</span>
      {children}
		</a>
	)
}

export default Tag
