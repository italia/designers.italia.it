import * as React from "react"
import Icon from "../icon/icon"
import './button.scss'

const Button = ({
	url,
	type,
	size,
	id,
	label,				//if data is yaml
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
	children,
	blank
}) => {
	let iconRendered
	let btnStyles = `${customStyle ? '' : 'btn'}`
		+ `${size ? ' btn-'+size : ''}`
		+ `${btnStyle ? ' btn-'+btnStyle : ''}`
		+ `${disabled ? ' disabled' : ''}`
		+ `${(iconLeft || iconRight && !dataBsToggle) ? ' btn-icon' : ''}`
		+ `${customStyle ? customStyle : ''}`
		+ `${addonStyle ? ' '+addonStyle : ''}`

	let iconRender
	if (icon) {
		iconRender = <Icon {...icon}/>
	}

	if (label) {
		children = label
	}

	// rounded icon wrapper
	if (iconRounded) {
		iconRendered = <span className="rounded-icon">{iconRender}</span>
	}else{
		iconRendered = iconRender
	}

	if (url) {
		return (
			<a href={url} target={blank ? '_blank' : undefined} id={id} className={btnStyles} role={role} aria-label={ariaLabel} data-disabled={disabled} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined} aria-disabled={disabled ? true : undefined}>
				{iconLeft ? iconRendered : ''}
				<span>{children}</span>
				{iconRight ? iconRendered : ''}
				{(!iconLeft && !iconRight && icon) ? iconRendered : ''}
			</a>
		)
	}else{
		return (
			<button id={id} type={type ? type : 'button'} aria-label={ariaLabel} className={btnStyles} aria-controls={ariaControls} aria-expanded={ariaExpanded} data-bs-toggle={dataBsToggle} data-bs-target={ariaControls ? '#'+ariaControls : undefined} aria-disabled={disabled ? true : undefined}>
				{iconLeft ? iconRendered : ''}
				<span>{children}</span>
				{iconRight ? iconRendered : ''}
				{(!iconLeft && !iconRight && icon) ? iconRendered : ''}
			</button>
		)
	}
}

export default Button
