import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import TestYaml from "../components/test-yaml/test-yaml"
import Pagedata from '../data/pages/cycle.yaml'

const SwitchComponents= {
	testyaml : TestYaml
};
const Yaml = () => {
	return (
	  <Template>
			{Pagedata.components.map((component,index)=>{
				const Switcher = SwitchComponents[component.name]
				return(
					<Switcher {...component.props} key={"item-"+index}/>
				)
			})}
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
