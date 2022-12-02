import * as React from "react"
import Template from "../../templates/tmpl-base"
import Card from "../../components/card/card"
import Pagedata from "./cards.yaml"

const Cards = ({ pageContext,location }) => {
	return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      <div className="container-xxl my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-5">Cards</h1>
          </div>
          { Pagedata.components.cards.map((card,index) => {
            return(
              <div className="col-12 col-md-6 col-lg-4 d-md-flex pb-4">
                <Card key={"card-"+index} {...card}></Card>
              </div>
            )
          })}
        </div>
      </div>

		</Template>
	)
}

export default Cards
