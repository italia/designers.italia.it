import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Hero from "../../components/hero/hero"
import SectionIntro from "../../components/section-intro/section-intro"
import Highlight from "../../components/highlight/highlight"
import Pagedata from "../../data/pages/perche/index.yaml"

const Perche = () => {
  return(
    <Template page={Pagedata.name} lastUpdate={Pagedata.lastUpdate}>
		<Hero {...Pagedata.components.hero}></Hero>
    <SectionIntro {...Pagedata.components.sectionIntro}/>
    <SectionIntro {...Pagedata.components.sectionIntro2}/>

    { Pagedata.components.highlights.map((hl,index) => {
      return(
        <Highlight key={"hl-"+index} {...hl}/>
      )
    })}

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
