import * as React from "react"

const Button = ({
	url,
	type,
	size,
	style,      //primary,secondary,outline-primary,outline-secondary,success,warning,danger,info
	label,
	role,   	   //button role for link <a>
	disabled,   //true,no prop
	iconLeft,   //icon in left position (component Icon)
	iconRight,	//icon in right position  (component Icon)
	children
	

}) => {
	let styles = 'btn'
		+ `${size ? ' icon-'+size : ''}`
		+ `${style ? ' btn-'+style : ''}`
		+ `${disabled ? ' disabled' : ''}`

	if (url) {
		return (
			<a href={url} className={styles} role={role} data-disabled={disabled}>
				{iconLeft}
				<span>{children}</span>
				{iconRight}
			</a>
		)
	}else{
		return (
			<button type={type ? type : 'button'} className={styles}>
				{iconLeft}
				<span>{children}</span>
				{iconRight}
			</button>
		)
	}
	
}

export default Button