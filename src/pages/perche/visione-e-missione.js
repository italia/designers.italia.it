import * as React from "react"
import Template from "../../templates/level-2"
import {Seo} from "../../components/seo/seo"
import Hero from "../../components/hero/hero"
import Pagedata from "../../data/pages/perche/visione-e-missione.yaml"
import ImageIcons from "../../components/image-icons/image-icons"
import SectionEditorial from "../../components/section-editorial/section-editorial"

const VisioneEMissione = () => {
  return(
    <Template page={Pagedata.name} lastUpdate={Pagedata.lastUpdate} navPreFooter={Pagedata.navPreFooter} >
		<Hero {...Pagedata.components.hero}></Hero>
    <ImageIcons {...Pagedata.components.imageIcons}/>
    <SectionEditorial {...Pagedata.components.sectionEditorial}></SectionEditorial>
    </Template>
  )
}

export default VisioneEMissione

export const Head = () => (
	<Seo
    title = {Pagedata.seo.name}
    description = {Pagedata.seo.description}
    image = {Pagedata.seo.image}
    twitterImage = {Pagedata.seo.twitterImage}
    pathname = {Pagedata.seo.pathname}
    canonical = {Pagedata.seo.canonical}
  >
  </Seo>
)
