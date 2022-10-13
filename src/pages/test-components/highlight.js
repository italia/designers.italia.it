import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Highlight from "../../components/highlight/highlight"
import Pagedata from "./highlight.yaml"

const Highlights = () => {
	return(
		<Template>
			{ Pagedata.components.highlights.map((hl,index) => {
          return(
            <Highlight key={"hl-"+index} {...hl}/>
          )
        })}
		</Template>
	)
}

export default Highlights

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
 )
