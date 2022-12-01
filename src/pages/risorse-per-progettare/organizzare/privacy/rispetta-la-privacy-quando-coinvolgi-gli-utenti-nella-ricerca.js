import * as React from "react"
import Template from "../../../../templates/tmpl-level-4"
import {Seo} from "../../../../components/seo/seo"

import Pagedata from "./rispetta-la-privacy-quando-coinvolgi-gli-utenti-nella-ricerca.yaml"

const Level4 = () => {
  return(
    <Template Pagedata={Pagedata}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Level4

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
