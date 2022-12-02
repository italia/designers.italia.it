import * as React from "react"
import Template from "../../../templates/tmpl-level-3"
import {Seo} from "../../../components/seo/seo"

import Pagedata from "./adotta-il-modello-di-servizi-digitali-comunali.yaml"

const Level3 = ({ pageContext }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Level3

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
