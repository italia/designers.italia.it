import * as React from "react"

const HeaderMenuItem = ({
	isDropDown,
	isMegaMenu,
	children
}) => {

	const styles = "nav-item"
		+ `${isDropDown ? ' dropdown' : ''}`
		+ `${isMegaMenu ? ' megamenu' : ''}`
	
		return(
		<li className={styles}>
			{children}
		</li>
	)
}

export default HeaderMenuItem