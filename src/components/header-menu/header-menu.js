import * as React from "react"

const HeaderMenu = ({children}) => {
	return(
		<div className="menu-wrapper">
			<ul className="navbar-nav">
				{children}
			</ul>
		</div>
	)
}

export default HeaderMenu