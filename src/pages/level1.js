import * as React from "react"
import Template from "../templates/tmpl-level-1"
import {Seo} from "../components/seo/seo"

import Pagedata from "./level1.yaml"

const Level1 = ({ pageContext,location }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Level1

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
