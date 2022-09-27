import * as React from "react"
import Icon from "../icon/icon"

const Button = ({
	url,
	type,
	size,
	id,
	btnStyle,         //primary,secondary,outline-primary,outline-secondary,success,warning,danger,info,dropdown
	customStyle,  
	addonStyle,  
	role,   	         //button role for link <a>
	disabled,         //true,no prop
	iconLeft,         //icon in left position (component Icon)
	iconRight,			 //icon in right position  (component Icon)
	icon,
	iconRounded,            
	ariaLabel,        //for buttons icon only, text for screen reader
	ariaControls,     //id for menu opened by button
	ariaExpanded,     //true / no prop
	dataBsToggle,	   //navbarcollapsible,dropdown
	children


}) => {
	let iconRendered
	let btnStyles = `${customStyle ? '' : 'btn'}`
		+ `${size ? ' btn-'+size : ''}`
		+ `${btnStyle ? ' btn-'+btnStyle : ''}`
		+ `${disabled ? ' disabled' : ''}`
		+ `${iconLeft || iconRight && !dataBsToggle ? ' btn-icon' : ''}`
		+ `${customStyle ? customStyle : ''}`
		+ `${addonStyle ? ' '+addonStyle : ''}`

	let iconRender
	if (icon) {
		iconRender = <Icon {...icon}/>
	}

	// rounded icon wrapper
	if (iconRounded) {
		iconRendered = <span className="rounded-icon">{iconRender}</span>
	}else{
		iconRendered = iconRender
	}

	if (url) {
		return (
			<a href={url} id={id} className={btnStyles} role={role} aria-label={ariaLabel} data-disabled={disabled} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined}>
				{iconLeft ? iconRendered : ''}
				<span>{children}</span>
				{iconRight ? iconRendered : ''}
			</a>
		)
	}else{
		return (
			<button id={id} type={type ? type : 'button'} aria-label={ariaLabel} className={btnStyles} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined}>
				{iconLeft ? iconRendered : ''}
				<span>{children}</span>
				{iconRight ? iconRendered : ''}
			</button>
		)
	}
}

export default Button
