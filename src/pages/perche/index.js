import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Pagedata from "../../data/pages/perche/index.yaml"

const Perche = () => {
  return(
    <Template page={Pagedata.name}>

    </Template>
  )
}

export default Perche

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
)