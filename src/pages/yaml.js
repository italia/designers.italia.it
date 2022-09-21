import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import TestYaml from "../components/test-yaml/test-yaml"
import Data from '../data/pages/home.yaml'

const Yaml = ({data}) => {
	var Handler
	return (
	  <Template>
			
			{Data.components.map((value,index)=>{
				Handler = "TestYaml"
				return (
					<Handler></Handler>
					
				)
			})}
	  </Template>
			
	)
}

export default Yaml