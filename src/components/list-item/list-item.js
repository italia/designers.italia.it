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
	avatar,
	img,
	alt,
	action,          //arrow right
	actions,			  //multiple actions right
	metadata         //metadata right

}) => {
	var styles = url ? undefined : "list-item"

	//icon render
	var iconRendered
	if (icon) {
		iconRendered = <Icon {...icon}/>
	}
	//icon render simple list
	var iconRenderedSimpleList
	if (icon) {
		iconRenderedSimpleList = <div class="it-rounded-icon"><Icon {...icon}/></div>
	}
	// arrow right
	var actionRendered
	if (action){
		actionRendered = <Icon {...icon}></Icon>
	}

	//immagine
	var imgRendered
	if(img) {
		imgRendered = <div class="it-thumb"><img src={img} alt={alt}/></div>
	}
	//-vartura label
	if(label){
		children = label
	}
	
	//-avatar
	var avatarRendered
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
	
	//multiple actions right
	var actionsRendered
	var icons
	if(actions) {
		icons =  actions.map(icons => {
			return <a href={icons.url} aria-label={icons.ariaLabel}><Icon {...icons}></Icon></a>
		})
		actionsRendered = <span class="it-multiple">{icons}</span>
	}
	// metadata
	var metadataRendered
	if (metadata) {
		metadataRendered = <span class="metadata">{metadata.label}</span>
		if(metadata.url) {
			metadataRendered = <a href="#">{metadataRendered}</a>
		}
	}
	var metadataActionsRendered
	// metadata & multiple actions
	if (metadata && actions) {
		metadataActionsRendered = <span class="it-multiple">{metadataRendered}{icons}</span>
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
		listContent = 	<div className="list-item">{
			iconLeft ? iconRenderedSimpleList : ''}
			{imgRendered}
			{avatarRendered}
			<div className="it-right-zone"><span className="text">{children}</span>
				{actionRendered}
				{!metadataActionsRendered ? actionsRendered : ''}
				{!metadataActionsRendered ? metadataRendered : ''}
				{metadataActionsRendered}
			</div>
			</div>
		styles=''
	}
	//- se è una lista semplice con link
	if (simpleList && url) {
		listContent = 	<a className={`list-item ${active ? ' active' : ''}`} href={url}>
			{iconLeft ? iconRenderedSimpleList : ''}
			{imgRendered}
			{avatarRendered}
			<div className="it-right-zone">
				<span className="text">{children}</span>
				{actionRendered}
				{!metadataActionsRendered ? actionsRendered : ''}
				{!metadataActionsRendered ? metadataRendered : ''}
				{metadataActionsRendered}
			</div>
		</a> 
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