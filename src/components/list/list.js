import React from "react"
import ListItem from "../list-item/list-item"
import "./list.scss"

import shareData from "../../data/share.yaml"

const List = React.forwardRef(({
	isMenu,       //is list inside nav menu: true or false
  isShare,      //is list a share: true or false
	collapsable,  //true / false
	isDropdown,   // if inside dropdown
	id,
  title,
  headingLevel,
	textLarge,
	children,
	customStyle,
	customStyleUl,
	heading,		    //if has heading
	headingLink,    //if heading has link
	listItems,
	simpleList,
}, ref) => {

  //heading level
	let HLevel
	if (headingLevel) {
		HLevel = `h${headingLevel}`;
	} else {
		HLevel = `h3`
	}

	const styles = `${isMenu ? 'link-list-wrapper' : 'it-list-wrapper'}`
		+ `${collapsable ? ' collapse' : ''}`
		+ `${customStyle ? ' '+customStyle : ''}`

	const ulStyles = `${isMenu ? 'link-list' : 'it-list'}`
		+ `${customStyleUl ? ' '+customStyleUl : ''}`


  if (isShare) {
    let shareItems = shareData.share
    children = shareItems.map((shareItems,index) => {
			return <ListItem {...shareItems} key={"z-list-"+index} isDropdown={isDropdown} textLarge={textLarge} simpleList={simpleList}></ListItem>
		})
  }

	if (listItems) {
		children = listItems.map((listitems,index) => {
			return <ListItem {...listitems} key={"z-list-"+index} isDropdown={isDropdown} textLarge={textLarge} simpleList={simpleList}></ListItem>
		})
	}

	let ListHeading
	if(heading) {
		ListHeading =<div className="link-list-heading">{heading}</div>
		if (headingLink) {
			ListHeading = <div className="link-list-heading"><a href={headingLink}>{heading}</a></div>
		}
	}

	return(
		<div ref={ref} className={styles} id={id}>
			{ListHeading}
      {title && <HLevel className="title h4 mb-0">{title}</HLevel>}
			<ul className={ulStyles}>
				{children}
			</ul>
		</div>
	)
})

export default List
