import * as React from "react"
import ListItem from "../list-item/list-item"

const List = ({
	isMenu,       //if list is inside nav menu: true or false
	collapsable,  //true / false
	id,
	children,
	customStyle,
	customStyleUl,
	listItems

}) => {
	const styles = `${isMenu ? 'link-list-wrapper' : 'it-list-wrapper'}`
		+ `${collapsable ? ' collapse' : ''}`
		+ `${customStyle ? ' '+customStyle : ''}`
	
	const ulStyles = `${isMenu ? 'link-list' : 'it-list'}`
		+ `${customStyleUl ? ' '+customStyleUl : ''}`


	if (listItems) {
		children = listItems.map(listitems => {
			return <ListItem {...listitems}></ListItem>
		})
	}

	return(
		<div className={styles} id={id}>
			<ul className={ulStyles}>
				{children}
			</ul>
		</div>
	)
}

export default List