import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Pagedata from "../data/pages/cards.yaml"
import Card from "../components/card/card"

const Cards = () => {
	return(
		<Template>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="my-3">Cards</h2>
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

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
 )