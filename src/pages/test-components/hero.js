import * as React from "react"
import Template from "../../templates/tmpl-base"
import Hero from "../../components/hero/hero"
import LastUpdate from "../../components/last-update/last-update"
import Pagedata from "./hero.yaml"

const HeroPage = ({ pageContext }) => {
	return(
    <Template Pagedata={Pagedata} pageContext={pageContext}>
			{ Pagedata.components.heros.map((hero,index) => {
          return(
            <Hero key={"hero-"+index} {...hero} pageContext={pageContext}/>
          )
        })}
        <LastUpdate {...Pagedata.components.lastUpdate}/>
		</Template>
	)
}

export default HeroPage
