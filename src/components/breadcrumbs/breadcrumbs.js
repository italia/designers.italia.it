import React from "react"
import Icon from "../icon/icon"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'

import './breadcrumbs.scss'

const Breadcrumbs = ({ 
  pageContext, 
  pageTitle,
  // separator,
  // dark,
  // ariaLabel,
  // items
}) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext

	// let breadcrumbsStyles = 'breadcrumb'
	// 	+ `${dark ? ' dark px-3' : ''}`

  // let breadcrumbItems = null

  // if (items) {
  //   breadcrumbItems = items.map((item,index) => {
  //     let ariaCurrent = item.active ? 'page' : undefined
  //     return(
  //       <li key={"bread-"+index} className={`breadcrumb-item ${item.active ? 'active' : ''}`} aria-current={ariaCurrent}>
  //         { item.icon ? <Icon icon={item.icon} size="sm" color="light" addonClasses="align-top me-1"/> : null }
  //         <a href={item.url}>{item.label}</a>
  //         {!item.active && <span className="separator">{separator}</span>}
  //       </li>
  //     )
  //   })
  // }

	return (
    <Breadcrumb
      // location={location}
      crumbs={crumbs}
      crumbSeparator=" > "
      crumbLabel={pageTitle.split("-")[0]}
    />

		// <nav className="breadcrumb-container" aria-label={ariaLabel}>
		// 	<ol
		// 		className={breadcrumbsStyles}
		// 	>
    //     {breadcrumbItems}
		// 	</ol>
		// </nav>
	)
}

export default Breadcrumbs
