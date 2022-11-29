import * as React from "react"
import Template from "../templates/tmpl-level-1-community"
import {Seo} from "../components/seo/seo"
import Pagedata from "./community.yaml"

const Community = ({ pageContext }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} pageTitle={Pagedata.seo.name}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Community

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
