import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Pagedata from "./section-editorial.yaml"
import SectionEditorial from "../../components/section-editorial/section-editorial"


const SectionEditorialPage = () => {
	return (
	  <Template>
      <SectionEditorial {...Pagedata.components.sectionEditorial}></SectionEditorial>
	  </Template>
	)
}

export default SectionEditorialPage

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
)
