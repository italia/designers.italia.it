import * as React from "react"

const HeaderMenuItem = ({
	isDropDown,
	isMegaMenu,
}) => {

	const styles = "nav-item"
		+ `${isDropDown ? ' dropdown' : ''}`
		+ `${isMegaMenu ? ' megamenu' : ''}`
	
		return(
		<li class={styles}>

		</li>
	)
}

export default HeaderMenuItem