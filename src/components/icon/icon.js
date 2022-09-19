import * as React from "react"

const Icon = ({
	icon,     //url of icon 'sprites.svg#it-tool'
	size,     //xs, sm, lg xl
	padded,   //true  
	bg,       //light, dark 
	align,    //bottom,middle,top
	color     //primary,secondary,success,warning,danger,light,white

}) => {
	
	

	return(
		<svg className={`icon ${padded ? 'icon-padded' : ''} ${size ? 'icon-'+size : ''} ${bg ? 'bg-'+bg : ''} ${align ? 'align-'+align : ''} ${color ? 'icon-'+color : ''}`}>
			<use href={`/svg/${icon}`}></use>
		</svg>
	)
}

export default Icon