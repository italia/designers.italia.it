import * as React from "react"
import Template from "../../templates/tmpl-level-2"
import {Seo} from "../../components/seo/seo"

import Pagedata from "./visione-e-missione.yaml"

const VisioneEMissione = () => {
  return(
    <Template Pagedata={Pagedata}>

    </Template>
  )
}

export default VisioneEMissione

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
