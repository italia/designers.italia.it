import * as React from "react"

const ListItem = ({
	url,        //link of item
	isDropdown, //true / false 
	children,   //usually label of link
	active      //state of the link

}) => {
	const styles = url ? undefined : "list-item"
		+ `${isDropdown ? ' dropdown-item' : ''}`
	
	//link
	var listContent
	listContent = <span>{children}</span>
	
	if (url) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${isDropdown ? ' dropdown-item' : ''}`}  href={url}>{children}</a>
	}
	if (isDropdown) {
		listContent = <a className={`list-item ${active ? ' active' : ''} ${isDropdown ? ' dropdown-item' : ''}`}  href={url}><span>{children}</span></a>
	}

	return(
		<li className={styles}>
			{listContent}
		</li>
	)
}

export default ListItem