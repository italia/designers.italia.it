import * as React from "react"
import './chip.scss'
import Link from "../link/link"
const Chip = (
	{
		size,
		color,
		url,
		label,
		blank,
		disabled,
		children
	}
) =>{
	let styles = 'chip chip-simple'
		+ `${size ? ' chip-'+size : ''}`
		+ `${color ? ' chip-'+color : ''}`
		+ `${disabled ? ' chip-disabled' : ''}`

	if (label) {
		children = label
	}

	return (
		<Link to={url} className={styles} target={blank ? '_blank' : undefined}>
			<span className="chip-label">{children}</span>
		</Link>
	)
}

export default Chip
