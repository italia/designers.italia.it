import * as React from "react"
import kebabCase from "lodash/kebabCase"

import './chip.scss'
import Link from "../link/link"

function Chip({
		size,
		color,
		path,
		label,
		children,
	}) {
	const styles = 'chip chip-simple'
		+ `${size ? ` chip-${  size}` : ''}`
		+ `${color ? ` chip-${  color}` : ''}`

	if (!path) path = "argomenti"

	return (
		<Link to={`/${path}/${kebabCase(label)}/`} className={styles}>
			<span className="chip-label">{label}</span>
			{children}
		</Link>
	)
}

export default Chip
