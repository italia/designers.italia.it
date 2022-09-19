import * as React from "react"

const Button = ({
	url,
	type,
	size,
	style,      //primary,secondary,outline-primary,outline-secondary,success,warning,danger,info
	label,
	role,   	   //button role for link <a>
	disabled,   //true,no prop
	iconLeft,  //icon in left position
	iconRight,	//icon in right position
	

}) => {
	let styles = `btn ${size ? 'icon-'+size : ''} ${style ? 'btn-'+style : ''} ${disabled ? 'disabled' : ''}`
	if (url) {
		return (
			<a href={url} className={styles} role={role} data-disabled={disabled}>
				{iconLeft}
				<span>{label}</span>
				{iconRight}
			</a>
		)
	}else{
		return (
			<button type={type ? type : 'button'} className={styles}>
				{iconLeft}
				<span>{label}</span>
				{iconRight}
			</button>
		)
	}
	
}

export default Button