import * as React from "react"
import Template from "../../templates/tmpl-base"
import Hero from "../../components/hero/hero"
import LastUpdate from "../../components/last-update/last-update"
import Pagedata from "./hero.yaml"

const HeroPage = () => {
	return(
		// <Template Pagedata={Pagedata}> // XXX disable to use breadcrumb plugin, unavaible on test-components
		// 	{ Pagedata.components.heros.map((hero,index) => {
    //       return(
    //         <Hero key={"hero-"+index} {...hero}/>
    //       )
    //     })}
    //     <LastUpdate {...Pagedata.components.lastUpdate}/>
		// </Template>
	)
}

export default HeroPage
