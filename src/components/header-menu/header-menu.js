import * as React from "react"

const HeaderMenu = ({children}) => {
	return(
			<ul className="navbar-nav">
				{children}
			</ul>
	)
}

export default HeaderMenu