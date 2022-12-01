import * as React from "react"
import Link from "../link/link"
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
		<Link to={url} className={styles}>
			<span className="visually-hidden">{screenReaderText}</span>
      {children}
		</Link>
	)
}

export default Tag
