import * as React from "react"

const ListItem = ({
	url,
	children,
	active

}) => {
	const styles = url ? false : "list-item"
	
	//link
	var listContent
	if (url) {
		listContent = <a className={`list-item ${active ? ' active' : ''}`}  href={url}>{children}</a>
	}

	return(
		<li className={styles}>
			{listContent}
		</li>
	)
}

export default ListItem