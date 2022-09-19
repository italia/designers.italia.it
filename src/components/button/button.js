import * as React from "react"

const Button = ({
	url,
	type,
	size,
	style,       //primary,secondary,outline-primary,outline-secondary,success,warning,danger,info
	role,   	    //button role for link <a>
	disabled,    //true,no prop
	iconLeft,    //icon in left position (component Icon)
	iconRight,	 //icon in right position  (component Icon)
	iconRounded, //icon width white circle bg: true, no prop
	srOnly,      //for buttons icon only, text for screen reader
	children
	

}) => {
	let iconLeftRendered
	let iconRightRendered
	let styles = 'btn'
		+ `${size ? ' btn-'+size : ''}`
		+ `${style ? ' btn-'+style : ''}`
		+ `${disabled ? ' disabled' : ''}`
		+ `${iconLeft || iconRight ? ' btn-icon' : ''}`

	
	// rounded icon wrapper
	if (iconRounded && iconLeft) {
		iconLeftRendered = <span class="rounded-icon">{iconLeft}</span>
	} else {
		iconLeftRendered = iconLeft
	}
	if (iconRounded && iconRight) {
		iconRightRendered = <span class="rounded-icon">{iconLeft}</span>
	} else {
		iconRightRendered = iconRight
	}

	if (url) {
		return (
			<a href={url} className={styles} role={role} aria-label={srOnly} data-disabled={disabled}>
				{iconLeftRendered}
				<span>{children}</span>
				{iconRightRendered}
			</a>
		)
	}else{
		return (
			<button type={type ? type : 'button'} aria-label={srOnly} className={styles}>
				{iconLeftRendered}
				<span>{children}</span>
				{iconRightRendered}
			</button>
		)
	}
}

export default Button