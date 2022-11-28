import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import Template from "../../templates/tmpl-base"
import TestYaml from "../../components/test-yaml/test-yaml"
import Pagedata from "./various.yaml"

const Yaml = ({data}) => {
	return (
	  <Template Pagedata={Pagedata}>
      <TestYaml
			title={Pagedata.components.testyaml.title}
			subtitle={Pagedata.components.testyaml.subtitle}
			text={<ReactMarkdown remarkPlugins={[gfm]}>{Pagedata.components.testyaml.text}</ReactMarkdown>}></TestYaml>
	  </Template>
	)
}

export default Yaml
