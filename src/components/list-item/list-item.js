import * as React from "react"
import Icon from "../icon/icon"
import Avatar from "../avatar/avatar"

const ListItem = ({
	url,             //link of item
	isDropdown,      //true / false 
	children,        //usually label of link
	active,          //state of the link
	disabled,        //disabled state
	label,           //text
	visuallyHidden,  //screen reader active state
	divider, 
	textLarge,		  //bigger text
	ariaLabel,		  //screen reader message
	icon,				  
	iconRight,       //icon on right
	iconLeft,		  //icon on left
	simpleList, 
	avatar

}) => {
	let styles = url ? undefined : "list-item"

	//icon render
	let iconRendered
	if (icon) {
		iconRendered = <Icon {...icon}/>
	}

	//-lettura label
	if(label){
		children = label
	}
	
	//-avatar
	let avatarRendered
	if(avatar){
		avatarRendered = <Avatar {...avatar}/>
	}

	//link
	var listContent
	listContent = <span>{children}</span>

	//screen reader rule
	var isActive
	if (active) {
		isActive = <span className="visually-hidden">{visuallyHidden}</span>
	}
	
	//-se esiste un link
	if (url) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  aria-label={ariaLabel ? `${ariaLabel} ${children}` : undefined}  href={url}>{iconLeft ? iconRendered: ''}{children}{isActive}{iconRight ? iconRendered: ''}</a>
	}
	//-se è all'interno di un dropdown
	if (isDropdown) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  href={url}>{iconLeft ? iconRendered : ''}<span>{children}</span>{iconRight ? iconRendered: ''}{isActive}</a>
	}
	//- se è una lista semplice
	if (simpleList) {
		listContent = 	<div className="list-item">{avatarRendered}<div className="it-right-zone"><span className="text">{children}</span></div></div>
		styles=''
	}
	//- se è una lista semplice con link
	if (simpleList && url) {
		listContent = 	<a className={`list-item ${active ? ' active' : ''}`} href={url}>{avatarRendered}<div className="it-right-zone"><span className="text">{children}</span></div></a> 
	}
	//- se è un divider
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