import * as React from "react"

const Button = ({
	url,
	type,
	size,
	btnStyle,       //primary,secondary,outline-primary,outline-secondary,success,warning,danger,info,dropdown
	customStyle,
	addonStyle,
	role,   	       //button role for link <a>
	disabled,       //true,no prop
	iconLeft,       //icon in left position (component Icon)
	iconRight,	    //icon in right position  (component Icon)
	iconRounded,    //icon width white circle bg: true, no prop
	srOnly,         //for buttons icon only, text for screen reader
	ariaControls,   //id for menu opened by button
	ariaExpanded,   //true / no prop
	dataBsToggle,	 //navbarcollapsible,dropdown
	children


}) => {
	let iconLeftRendered
	let iconRightRendered
	let btnStyles = `${customStyle ? '' : 'btn'}`
		+ `${size ? ' btn-'+size : ''}`
		+ `${btnStyle ? ' btn-'+btnStyle : ''}`
		+ `${disabled ? ' disabled' : ''}`
		+ `${iconLeft || iconRight && !dataBsToggle ? ' btn-icon' : ''}`
		+ `${customStyle ? customStyle : ''}`
		+ `${addonStyle ? ' '+addonStyle : ''}`



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
			<a href={url} className={btnStyles} role={role} aria-label={srOnly} data-disabled={disabled} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined}>
				{iconLeftRendered}
				<span>{children}</span>
				{iconRightRendered}
			</a>
		)
	}else{
		return (
			<button type={type ? type : 'button'} aria-label={srOnly} className={btnStyles} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined}>
				{iconLeftRendered}
				<span>{children}</span>
				{iconRightRendered}
			</button>
		)
	}
}

export default Button
