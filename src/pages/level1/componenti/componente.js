import * as React from "react"
import Template from "../../../templates/tmpl-design-system-detail"
import {Seo} from "../../../components/seo/seo"
import Tab from "../../../components/tab/tab"

import Pagedata from "./componente.yaml"
import Tab01 from "./componente-01-uso.yaml"
import Tab02 from "./componente-02-progettazione.yaml"
import Tab03 from "./componente-03-sviluppo.yaml"

const DesignSystemComponente = () => {
  return(
    <Template Pagedata={Pagedata}>
      {/* place extra components / HTML here */}
      <Tab tab01={Tab01} tab02={Tab02} tab03={Tab03}/>
    </Template>
  )
}

export default DesignSystemComponente

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
