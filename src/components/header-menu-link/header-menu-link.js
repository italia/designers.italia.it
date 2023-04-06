import * as React from "react"
import Icon from "../icon/icon"
import { useEffect } from "react";
import {Dropdown} from "bootstrap-italia"
import "./header-menu-link.scss"

const HeaderMenuLink = ({
	isDropDown,
	idMegamenu,
	label,
	url,
	page
}) => {

  useEffect(() => {
    new Dropdown(document.getElementById(idMegamenu), {})
  });

	const styles = 'nav-link'
		+ `${isDropDown ? ' dropdown-toggle' : ''}`
		+ `${page===label ? ' active' : ''}`
		+ ' px-lg-2 px-xl-3 fw-semibold'

	function icon(boolean){
		if (boolean) {
			return (
				<Icon icon="sprites.svg#it-expand" size="xs" addonClasses="ms-1"/>
			)
		}
	}

  if (isDropDown) {
    return (
      <button
        className={styles}
        data-bs-toggle={isDropDown ? 'dropdown' : undefined}
        aria-expanded={isDropDown ? 'false' : undefined}
        id={idMegamenu}
        >
        <span>{label}</span>
        {icon(isDropDown)}
      </button>
    )
  } else {
    return (
      <a // < XXX We need to use <Link> component? 
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

}
export default HeaderMenuLink
