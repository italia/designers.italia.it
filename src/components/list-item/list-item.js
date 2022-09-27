import * as React from "react"
import Icon from "../icon/icon"
import Avatar from "../avatar/avatar"

const ListItem = ({
	url,        //link of item
	isDropdown, //true / false 
	children,   //usually label of link
	active,     //state of the link
	disabled,
	label,
	visuallyHidden, //screen reader active state
	divider,
	textLarge,
	ariaLabel,
	icon,
	iconRight,
	iconLeft,
	simpleList,
	avatar

}) => {
	let styles = url ? undefined : "list-item"



	//icon render
	let iconRendered
	if (icon) {
		iconRendered = <Icon {...icon}/>
	}

	if(label){
		children = label
	}
	
	let avatarRendered
	if(avatar){
		avatarRendered = <Avatar {...avatar}/>
	}

	//link
	var listContent
	listContent = <span>{children}</span>

	var isActive
	if (active) {
		isActive = <span className="visually-hidden">{visuallyHidden}</span>
	}
	
	if (url) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  aria-label={ariaLabel ? `${ariaLabel} ${children}` : undefined}  href={url}>{iconLeft ? iconRendered: ''}{children}{isActive}{iconRight ? iconRendered: ''}</a>
	}
	if (isDropdown) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  href={url}>{iconLeft ? iconRendered : ''}<span>{children}</span>{iconRight ? iconRendered: ''}{isActive}</a>
	}
	if (simpleList) {
		listContent = 	<div className="list-item">{avatarRendered}<div className="it-right-zone"><span className="text">{children}</span></div></div>
		styles=''
	}
	if (simpleList && url) {
		listContent = 	<a className={`list-item ${active ? ' active' : ''}`} href={url}>{avatarRendered}<div className="it-right-zone"><span className="text">{children}</span></div></a> 
	}
	if (divider) {
		listContent = <span className="divider"></span>
		styles = ''
	}

	return(
		<li className={styles}>
			{listContent}
		</li>
	)
}

export default ListItem