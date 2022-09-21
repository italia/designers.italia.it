import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import TestYaml from "../components/test-yaml/test-yaml"
import Pagedata from '../data/pages/home.yaml'

const Yaml = ({data}) => {
	return (
	  <Template>
      <TestYaml title={Pagedata.components.testyaml.title}></TestYaml>
	  </Template>
	)
}

export default Yaml

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
 )
