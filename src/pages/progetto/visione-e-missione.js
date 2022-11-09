import * as React from "react"
import Template from "../../templates/tmpl-level-2"
import {Seo} from "../../components/seo/seo"
import Hero from "../../components/hero/hero"
import ImageIcons from "../../components/image-icons/image-icons"
import SectionEditorial from "../../components/section-editorial/section-editorial"
import Pagedata from "./visione-e-missione.yaml"

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
