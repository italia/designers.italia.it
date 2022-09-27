import * as React from "react"
import Button from "../button/button"


const Dropdown = ({
	btnId,
	dropUp,
	dropEnd,
	dropStart,
	children,
	button,
	
}) => {
	
	const styles = "dropdown" 
		+ `${dropUp ? ' dropup' : ''}`
		+ `${dropEnd ? ' dropend' : ''}`
		+ `${dropStart ? ' dropstart' : ''}`

	let btnComponents
	if (button) {
		btnComponents = <Button id={btnId} ariaExpanded="false" ariaHaspopup="true" dataBsToggle="dropdown" {...button}></Button>
	}

	return (
		<div className={styles}>
			{btnComponents}
			<div className="dropdown-menu" aria-labelledby={btnId}>
				{children}
			</div>
		</div>
	)
}

export default Dropdown