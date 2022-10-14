import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Pagedata from "./section-editorial.yaml"


const SectionEditorial = () => {
	return (
	  <Template>

	  </Template>
	)
}

export default SectionEditorial

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
)
