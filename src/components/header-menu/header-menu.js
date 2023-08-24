import * as React from "react"

function HeaderMenu({children}) {
	return(
			<ul className="navbar-nav">
				{children}
			</ul>
	)
}

export default HeaderMenu