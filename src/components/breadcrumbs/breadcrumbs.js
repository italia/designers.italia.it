import React from "react"

import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'

import './breadcrumbs.scss'

const Breadcrumbs = ({ 
  pageContext, 
}) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext

	return (
    <Breadcrumb
      // location={location}
      crumbs={crumbs}
      crumbSeparator=" > "
    />

	)
}

export default Breadcrumbs
