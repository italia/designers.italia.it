import * as React from "react"
import Template from "../../templates/level-1"
import HighlightCards from "../../components/highlight-cards/highlight-cards"
import Pagedata from "./highlight-cards.yaml"

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

			{ Pagedata.components.highlightCards.map((hl,index) => {
          return(
            <HighlightCards key={"hl-"+index} {...hl}/>
          )
        })}
		</Template>
	)
}

export default Highlights
