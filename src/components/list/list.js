import * as React from "react"
import ListItem from "../list-item/list-item"

const List = ({
	isMenu,       //if list is inside nav menu: true or false
	collapsable,  //true / false
	isDropdown,   // if inside dropdown
	id,
	textLarge,
	children,
	customStyle,
	customStyleUl,
	title,		  //if has heading
	listItems,
	simpleList

}) => {
	const styles = `${isMenu ? 'link-list-wrapper' : 'it-list-wrapper'}`
		+ `${collapsable ? ' collapse' : ''}`
		+ `${customStyle ? ' '+customStyle : ''}`
	
	const ulStyles = `${isMenu ? 'link-list' : 'it-list'}`
		+ `${customStyleUl ? ' '+customStyleUl : ''}`

	
	if (listItems) {
		children = listItems.map(listitems => {
			return <ListItem {...listitems} isDropdown={isDropdown} textLarge={textLarge} simpleList={simpleList}></ListItem>
		})
	}

	let heading
	if(title) {
		heading =<div class="link-list-heading">{title}</div>
	}

	return(
		<div className={styles} id={id}>
			{heading}
			<ul className={ulStyles}>
				{children}
			</ul>
		</div>
	)
}

export default List