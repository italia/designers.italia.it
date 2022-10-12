import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Pagedata from "../../data/pages/perche/index.yaml"
import Hero from "../../components/hero/hero"

const Perche = () => {
  return(
    <Template page={Pagedata.name}>
		<Hero {...Pagedata.components.hero}></Hero>
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