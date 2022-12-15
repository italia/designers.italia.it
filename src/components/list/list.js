import React, { useEffect, useState } from "react"

import ListItem from "../list-item/list-item"
import Link from "../link/link"
import "./list.scss"

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

  const [currentUrl, setCurrentUrl ] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
    setCurrentTitle(window.document.title)
  })

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
    const iconProps = {color: 'primary', size: 'sm'}
    const onCopyLink = async () => {
      await navigator.clipboard.writeText(currentUrl);
    }

    children = (
      <>
        <ListItem
          label="Copia collegamento"
          icon={{icon: 'sprites.svg#it-copy', ...iconProps}}
          iconRight={true} isDropdown={isDropdown}
          textLarge={textLarge} simpleList={simpleList}
          ariaLabel=""
          url="#"
          onClick={onCopyLink}
        />
        <ListItem
          label="Condividi su Twitter"
          icon={{icon: 'sprites.svg#it-twitter', ...iconProps}}
          iconRight={true} isDropdown={isDropdown}
          textLarge={textLarge} simpleList={simpleList}
          ariaLabel="Condividi su Twitter (si apre in una nuova finestra)"
          url={`https://twitter.com/intent/tweet/?text=${currentTitle}&url=${currentUrl}`}
          blank="true"
        />
        <ListItem
          label="Condividi su LinkedIn"
          icon={{icon: 'sprites.svg#it-linkedin', ...iconProps}}
          iconRight={true} isDropdown={isDropdown}
          textLarge={textLarge} simpleList={simpleList}
          ariaLabel="Condividi su LinkedIn (si apre in una nuova finestra)"
          url={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
          blank="true"
        />
      </>
    )
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
			ListHeading = <div className="link-list-heading"><Link to={headingLink}>{heading}</Link></div>
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
