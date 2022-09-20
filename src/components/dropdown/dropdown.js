import * as React from "react"
import Button from "../button/button"
import Icon from "../icon/icon"

const Dropdown = ({
	idButton,
	labelButton,
	children
	
}) => {
	return (
		<div className="dropdown">
			<Button btnStyle="dropdown dropdown-toggle" iconRight={<Icon icon="sprites.svg#it-expand" color="primary" size="sm" addonClasses="icon-expand"/>} type="button" dataBsToggle="dropdown" id={idButton} aria-haspopup="true" aria-expanded="false">
				{labelButton}
			</Button>
			<div className="dropdown-menu" aria-labelledby={idButton}>
				{children}
			</div>
		</div>
	)
}

export default Dropdown