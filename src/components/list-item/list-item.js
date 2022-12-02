import * as React from "react"
import Icon from "../icon/icon"
import Avatar from "../avatar/avatar"
import Link from "../link/link"
import ImageResponsive from "../image-responsive/image-responsive"

const ListItem = ({
	url,             //link of item
  blank,
	isDropdown,      //true / false
	children,        //usually label of link
	active,          //state of the link
	disabled,        //disabled state
	label,           //label
  srBefore,        // screenreader text before label
  srAfter,         // screenreader text after label
  text,            //text under the label
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
	metadata,        //metadata right
	addonClasses

}) => {
	let styles = url ? undefined : "list-item"

	//icon render
	let iconRendered
	if (icon) {
		iconRendered = <Icon {...icon}/>
	}
	//icon render simple list
	let iconRenderedSimpleList
	if (icon) {
		iconRenderedSimpleList = <div className="it-rounded-icon"><Icon {...icon}/></div>
	}
	// arrow right
	let actionRendered
	if (action){
		actionRendered = <Icon {...icon}></Icon>
	}

	//immagine
	let imgRendered
	if(img) {
		imgRendered = <div className="it-thumb"><ImageResponsive src={img} alt={alt}/></div>
	}
	// label
	if(label){
		children = label
	}

	//-avatar
	let avatarRendered
	if(avatar){
		avatarRendered = <Avatar {...avatar}/>
	}

	//link
	let listContent
	listContent = <span>{children}</span>

	//screen reader rule
	let isActive
	if (active) {
		isActive = <span className="visually-hidden">{visuallyHidden}</span>
	}

	//multiple actions right
	let actionsRendered
	let icons
	if(actions) {
		icons =  actions.map((icons,index) => {
			return <Link to={icons.url} target={icons.blank ? '_blank' : undefined} aria-label={icons.ariaLabel} key={"iconsation-"+index} ><Icon {...icons}></Icon></Link>
		})
		actionsRendered = <span className="it-multiple flex-shrink-0">{icons}</span>
	}
	// metadata
	let metadataRendered
	if (metadata) {
		metadataRendered = <span className="metadata">{metadata.label}</span>
		if(metadata.url) {
			metadataRendered = <Link to="#">{metadataRendered}</Link>
		}
	}
	let metadataActionsRendered
	// metadata & multiple actions
	if (metadata && actions) {
		metadataActionsRendered = <span className="it-multiple flex-shrink-0">{metadataRendered}{icons}</span>
	}
	//-se esiste un link
	if (url) {
		listContent = <Link className={`list-item ${active ? ' active' : ''} ${addonClasses ? ' '+addonClasses : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  aria-label={ariaLabel ? `${ariaLabel} ${children}` : undefined}  to={url} target={blank ? '_blank' : undefined}>{iconLeft ? iconRendered: ''}<span>{children}</span>{isActive}{iconRight ? iconRendered: ''}</Link>
	}
  //-se esiste un link
	if (url) {
		listContent = <Link className={`list-item ${active ? ' active' : ''} ${addonClasses ? ' '+addonClasses : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? ' dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-disabled={disabled ? 'true' : undefined}  aria-label={ariaLabel ? `${ariaLabel} ${children}` : undefined}  to={url} target={blank ? '_blank' : undefined}>{iconLeft ? iconRendered: ''}<span>{children}</span>{isActive}{iconRight ? iconRendered: ''}</Link>
	}
	//-se è all'interno di un dropdown
	if (isDropdown) {
		listContent = <Link className={`list-item ${active ? ' active' : ''} ${addonClasses ? ' '+addonClasses : ''} ${textLarge ? ' large' : ''} ${iconLeft ? ' left-icon' : ''} ${iconRight ? ' right-icon' : ''} ${isDropdown ? 'dropdown-item' : ''} ${disabled ? ' disabled' : ''}`} aria-label={ariaLabel ? `${ariaLabel}` : undefined} aria-disabled={disabled ? 'true' : undefined}  to={url} target={blank ? '_blank' : undefined}>{iconLeft ? iconRendered : ''}<span>{children}</span>{iconRight ? iconRendered: ''}{isActive}</Link>
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
		listContent = 	<Link className={`list-item ${active ? ' active' : ''}`} to={url} target={blank ? '_blank' : undefined}>
			{iconLeft ? iconRenderedSimpleList : ''}
			{imgRendered}
			{avatarRendered}
			<div className="it-right-zone">
				<span className="text">
          {srBefore && <span className="visually-hidden">{srBefore}</span>}
          {children}
          {srAfter && <span className="visually-hidden">{srAfter}</span>}
        </span>
				{actionRendered}
				{!metadataActionsRendered ? actionsRendered : ''}
				{!metadataActionsRendered ? metadataRendered : ''}
				{metadataActionsRendered}
			</div>
		</Link>
	}
  //- se è una lista semplice con link ed actions
	if (simpleList && url && actions) {
		listContent = 	<div className={`list-item ${active ? ' active' : ''}`} >
			{iconLeft ? iconRenderedSimpleList : ''}
			{imgRendered}
			{avatarRendered}
			<div className="it-right-zone">
        <Link to={url} target={blank ? '_blank' : undefined}>
          <span className="text">
            {srBefore && <span className="visually-hidden">{srBefore}</span>}
            {children}
            {srAfter && <span className="visually-hidden">{srAfter}</span>}
            {text && <em>{text}</em>}</span>
        </Link>
				{actionRendered}
				{!metadataActionsRendered ? actionsRendered : ''}
				{!metadataActionsRendered ? metadataRendered : ''}
				{metadataActionsRendered}
			</div>
		</div>
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
