import * as React from "react"
import Template from "../../templates/level-1"
import {Seo} from "../../components/seo/seo"
import Hero from "../../components/hero/hero"
import SectionIntro from "../../components/section-intro/section-intro"
import TitleText from "../../components/title-text/title-text"
import Highlight from "../../components/highlight/highlight"
import Pagedata from "../../data/pages/progetto/index.yaml"
import ImageIcons from "../../components/image-icons/image-icons"
import HighlightCards from "../../components/highlight-cards/highlight-cards"
import Topics from "../../components/topics/topics"

const Progetto = () => {
  return(
    <Template page={Pagedata.name} lastUpdate={Pagedata.lastUpdate}>
		<Hero {...Pagedata.components.hero}></Hero>
    <SectionIntro {...Pagedata.components.sectionIntro}/>
    <TitleText {...Pagedata.components.titleText}/>

    { Pagedata.components.highlights.map((hl,index) => {
      return(
        <Highlight key={"hl-"+index} {...hl}/>
      )
    })}

    <ImageIcons {...Pagedata.components.imageIcons}/>

    <HighlightCards {...Pagedata.components.highlightCards1} />

    <HighlightCards {...Pagedata.components.highlightCards2} />

    <HighlightCards {...Pagedata.components.highlightCards3} />

    <Topics {...Pagedata.components.topics}/>

    </Template>
  )
}

export default Progetto

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
