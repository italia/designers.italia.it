import * as React from "react"
import Template from "../../templates/tmpl-base"
import Highlight from "../../components/highlight/highlight"
import Pagedata from "./highlight.yaml"

const Highlights = () => {
	return(
		<Template>
      <div className="container-xxl my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-5">{Pagedata.name}</h1>
          </div>
        </div>
      </div>
			{ Pagedata.components.highlights.map((hl,index) => {
          return(
            <Highlight key={"hl-"+index} {...hl}/>
          )
        })}
		</Template>
	)
}

export default Highlights
