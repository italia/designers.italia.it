import * as React from "react"
import Button from "../button/button"
import List from "../list/list"
import "./dropdown.scss"


const Dropdown = ({
	btnId,
	dropUp,
	dropEnd,
	dropStart,
	list,
	children,
	button,
	customStyle,
	shareUrl,
  shareTitle,
}) => {

	const styles = "dropdown"
		+ `${dropUp ? ' dropup' : ''}`
		+ `${dropEnd ? ' dropend' : ''}`
		+ `${dropStart ? ' dropstart' : ''}`
		+ `${customStyle ? ' '+customStyle : ''}`

	let btnComponents
	if (button) {
		btnComponents = <Button
			id={btnId}
			ariaExpanded="false"
			ariaHaspopup="true"
			dataBsToggle="dropdown"
			{...button}></Button>
	}


	if (list) {
		children = <List {...list} shareUrl={shareUrl} shareTitle={shareTitle} isMenu isDropdown></List>
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
