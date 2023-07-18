import * as React from "react"
import Link from "../link/link"
import './tag.scss'

function Tag({
	url,
	children,
	label,
  addonClasses,
  screenReaderText
}) {
	if (label) {
		children = label
	}
  const styles = "tag"
    + `${addonClasses ? ` ${addonClasses}` : ''}`

  if (url) {
    return(
      <Link to={url} className={styles}>
        {screenReaderText && <span className="visually-hidden">{screenReaderText}</span>}
        {children}
      </Link>
    )
  } 
    return(
      <span className={styles}>
         {screenReaderText && <span className="visually-hidden">{screenReaderText}</span>}
        {children}
      </span>
    )
  

}

export default Tag
