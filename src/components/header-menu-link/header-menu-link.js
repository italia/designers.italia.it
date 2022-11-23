import * as React from "react"
import Icon from "../icon/icon"
import { useEffect } from "react";
import {Dropdown} from "bootstrap-italia"

const HeaderMenuLink = ({
	isDropDown,
	idMegamenu,
	label,
	url,
	page
}) => {

  useEffect(() => {
    const dropDown = new Dropdown(document.getElementById(idMegamenu), {})
  });

	const styles = 'nav-link'
		+ `${isDropDown ? ' dropdown-toggle' : ''}`
		+ `${page===label ? ' active' : ''}`
		+ ' px-lg-3 px-xl-4'

	function icon(boolean){
		if (boolean) {
			return (
				<Icon icon="sprites.svg#it-expand" size="xs"/>
			)
		}
	}
	return (
		<a
			className={styles}
			href={url ? url : '#'}
			data-bs-toggle={isDropDown ? 'dropdown' : undefined}
			aria-expanded={isDropDown ? 'false' : undefined}
			id={idMegamenu}
			>
			<span>{label}</span>
			{icon(isDropDown)}
		</a>
	)
}
export default HeaderMenuLink
