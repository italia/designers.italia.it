import * as React from "react"
import Template from "../../templates/default"
import {Seo} from "../../components/seo/seo"
import Hero from "../../components/hero/hero"
import SectionIntro from "../../components/section-intro/section-intro"
import Highlight from "../../components/highlight/highlight"
import Pagedata from "../../data/pages/perche/index.yaml"
import ImageIcons from "../../components/image-icons/image-icons"

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

    <ImageIcons {...Pagedata.components.imageIcons}/>

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
