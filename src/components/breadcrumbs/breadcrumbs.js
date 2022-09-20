import React from "react"
import Icon from "../icon/icon"

const Breadcrumbs = ({separator, icon, dark, ariaLabel}) => {
	let breadcrumbsStyles = 'breadcrumb'
		+ `${dark ? ' dark px-3' : ''}`
	return (
		<nav className="breadcrumb-container" aria-label={ariaLabel}>
			<ol
				className={breadcrumbsStyles}
			>
				<li className="breadcrumb-item">
					{ icon ? <Icon icon={icon} size="sm" color="light" addonClasses="align-top me-1"/> : null }
					<a href="#">Home</a><span className="separator">{separator}</span>
				</li>
				<li className="breadcrumb-item">
					<a href="#">Sottosezione</a><span className="separator">{separator}</span>
				</li>
				<li className="breadcrumb-item active" aria-current="page">Nome pagina</li>
			</ol>
		</nav>
	)
}

export default Breadcrumbs