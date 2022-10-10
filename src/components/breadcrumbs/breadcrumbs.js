import React from "react"
import Icon from "../icon/icon"
import './breadcrumbs.scss'

const Breadcrumbs = ({
  separator,
  dark,
  ariaLabel,
  items
}) => {
	let breadcrumbsStyles = 'breadcrumb'
		+ `${dark ? ' dark px-3' : ''}`


	return (
		<nav className="breadcrumb-container" aria-label={ariaLabel}>
			<ol
				className={breadcrumbsStyles}
			>
        {items.map((item,index) => {
          let ariaCurrent = item.active ? 'page' : undefined
          return(
            <li key={"bread-"+index} className={`breadcrumb-item ${item.active ? 'active' : ''}`} aria-current={ariaCurrent}>
              { item.icon ? <Icon icon={item.icon} size="sm" color="light" addonClasses="align-top me-1"/> : null }
              <a href={item.url}>{item.label}</a>
              {!item.active && <span className="separator">{separator}</span>}
            </li>
          )
        })}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
