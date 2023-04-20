import * as React from "react"
import { useEffect, useRef } from "react"
import Icon from "../icon/icon"
import Button from "../button/button"

import { Tooltip as BSITooltip } from 'bootstrap-italia'


const Tooltip = (
	{
		label,
		children
	}
) => {

	const ICON_INFO = {
		icon: "sprites.svg#it-info-circle",
		size: "sm",
		color: "primary",
		addonClasses: "align-middle",
		ariaLabel: " Informazioni"
	}

	const tRef = useRef()

	useEffect(() => {
		new BSITooltip(tRef.current.children[0])
	}, [])

	return (
		<span ref={tRef} >
			<Button addonStyle="btn p-0 shadow-none" title={label}>
				<Icon {...ICON_INFO}/>
				{children}
			</Button>
		</span>
	)
}

export default Tooltip
