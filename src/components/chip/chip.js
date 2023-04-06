import * as React from "react"
import kebabCase from "lodash/kebabCase"

import './chip.scss'
import Link from "../link/link"

const Chip = (
	{
		size,
		color,
		url,
		label,
		children,
	}
) =>{
	let styles = 'chip chip-simple'
		+ `${size ? ' chip-'+size : ''}`
		+ `${color ? ' chip-'+color : ''}`


	return (
			<Link to={`/argomenti/${kebabCase(label)}/`} className={styles}>
				<span className="chip-label">{label}</span>
				{children}
			</Link>
	)
}

export default Chip
