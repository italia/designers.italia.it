import React from "react"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'

import './breadcrumbs.scss'

const Breadcrumbs = ({ 
  pageContext, 
  crumbLabel,
}) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext

	return (
    <div>
    {!crumbLabel && <Breadcrumb crumbs={crumbs} crumbSeparator=" > "/>}
    {crumbLabel && <Breadcrumb crumbs={crumbs} crumbLabel={crumbLabel} crumbSeparator=" > "/>}
    </div>
	)
}

export default Breadcrumbs
