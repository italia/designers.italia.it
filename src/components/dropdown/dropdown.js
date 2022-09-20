import * as React from "react"
import Button from "../button/button"
import Icon from "../icon/icon"

const Dropdown = ({
	idButton,
	dropUp,
	dropEnd,
	dropStart,
	children,
	button
	
}) => {
	
	const styles = "dropdown" 
		+ `${dropUp ? ' dropup' : ''}`
		+ `${dropEnd ? ' dropend' : ''}`
		+ `${dropStart ? ' dropstart' : ''}`

	return (
		<div className={styles}>
			{button}
			<div className="dropdown-menu" aria-labelledby={idButton}>
				{children}
			</div>
		</div>
	)
}

export default Dropdown