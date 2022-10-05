import * as React from "react"
import './chip.scss'
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
		<a href={url} className={styles} target={blank ? '_blank' : undefined}>
			<span className="chip-label">{children}</span>
		</a>
	)
}

export default Chip