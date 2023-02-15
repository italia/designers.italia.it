import * as React from "react"
import Template from "../../../templates/tmpl-design-system-detail"
import {Seo} from "../../../components/seo/seo"
import Tab from "../../../components/tab/tab"

import Pagedata from "./accordion.yaml"
import Tab01 from "./accordion-01-uso.yaml"
import Tab02 from "./accordion-02-progettazione.yaml"
import Tab03 from "./accordion-03-sviluppo.yaml"

import variantMock from './accordion.json'

const DesignSystemComponente = ({ pageContext, location }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      {/* place extra components / HTML here */}
      <Tab
        tab01={Object.assign({}, Tab01, { variants: variantMock })}
        tab02={Tab02}
        tab03={Object.assign({}, Tab03, { variants: variantMock })}
      />
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
