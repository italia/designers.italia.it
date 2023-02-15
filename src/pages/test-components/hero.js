import * as React from "react"
import Template from "../../templates/tmpl-base"
import Hero from "../../components/hero/hero"
import LastUpdate from "../../components/last-update/last-update"
import Pagedata from "./hero.yaml"

// XXX doesn't work with the new breadcrumb plugin, as is, see correct templates

const HeroPage = ({ pageContext,location }) => {
	// return(
    // //  <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
	// 	// 	{ Pagedata.components.heros.map((hero,index) => {
    // //       return(
    // //         <Hero key={"hero-"+index} {...hero} />
    // //       )
    // //     })}
    // //     <LastUpdate {...Pagedata.components.lastUpdate}/>
	// 	// </Template>
	// )
}

export default HeroPage
