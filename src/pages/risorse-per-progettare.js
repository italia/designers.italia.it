import * as React from "react"
import Template from "../templates/tmpl-level-1"
import {Seo} from "../components/seo/seo"
import Pagedata from "./risorse-per-progettare.yaml"

const Progetto = ({ pageContext }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Progetto

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
