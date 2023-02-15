import * as React from "react"
import Template from "../../templates/tmpl-base"
import Pagedata from "./section-editorial.yaml"
import SectionEditorial from "../../components/section-editorial/section-editorial"


const SectionEditorialPage = ({ pageContext, location }) => {
	return (
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      <SectionEditorial {...Pagedata.components.sectionEditorial}></SectionEditorial>
      <SectionEditorial {...Pagedata.components.sectionEditorialMenu}></SectionEditorial>
      <SectionEditorial {...Pagedata.components.sectionEditorial2}></SectionEditorial>
      <SectionEditorial {...Pagedata.components.sectionEditorial3}></SectionEditorial>
	  </Template>
	)
}

export default SectionEditorialPage
