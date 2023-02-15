import * as React from "react"
import Template from "../../../templates/tmpl-design-system-index"
import {Seo} from "../../../components/seo/seo"

import Pagedata from "./per-designer.yaml"

const DesignSystemComeIniziare = ({ pageContext,location }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default DesignSystemComeIniziare

export const Head = () => (
	<Seo
    title = {Pagedata.seo.name}
    description = {Pagedata.seo.description}
    image = {Pagedata.seo.image}
    twitterImage = {Pagedata.seo.twitterImage}
    pathname = {Pagedata.seo.pathname}
    canonical = {Pagedata.seo.canonical}
  >
  </Seo>
)
