import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Hero from "../components/hero/hero"
import Pagedata from "../data/pages/hero.yaml"
import LastUpdate from "../components/last-update/last-update"

const HeroPage = () => {
	return(
		<Template>
			{ Pagedata.components.heros.map((hero,index) => {
          return(
            <Hero key={"hero-"+index} {...hero}/>
          )
        })}
        <LastUpdate {...Pagedata.components.lastUpdate}/>
		</Template>
	)
}

export default HeroPage

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
 )
