import * as React from "react"

const Icon = ({
	icon,     //url of icon 'sprites.svg#it-tool'
	size,     //xs, sm, lg xl
	padded,   //true, no prop 
	bg,       //light, dark 
	align,    //bottom,middle,top
	color     //primary,secondary,success,warning,danger,light,white

}) => {
	const styles = 'icon'
		+ `${padded ? ' icon-padded' : ''}`
		+ `${size ? ' icon-'+size : ''}`
		+ `${bg ? ' bg-'+bg : ''}`
		+ `${align ? ' align-'+align : ''}`
		+ `${color ? ' icon-'+color : ''}`

	return(
		<svg className={styles}>
			<use href={`/svg/${icon}`}></use>
		</svg>
	)
}

export default Icon