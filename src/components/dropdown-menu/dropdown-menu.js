import * as React from "react"

const DropdownMenu = ({
	idMegamenu,
	children
}) => {
	return (
		<div className="dropdown-menu" role="region" aria-labelledby={idMegamenu}>
			{children}
		</div>
	)
}

export default DropdownMenu