import * as React from "react"
import Template from "../templates/tmpl-home"
import {Seo} from "../components/seo/seo"
import Pagedata from "./home.yaml"
import Highlight from "../components/highlight/highlight"
import SearchMain from "../components/search-main/search-main"
import ContentCollapse from "../components/content-collapse/contentCollapse"
import SectionIntro from "../components/section-intro/section-intro"

const Home = () =>{
  return(
    <Template Pagedata={Pagedata}>
      <Highlight {...Pagedata.components.hero}>
        {Pagedata.components.hero.moreText && <ContentCollapse label={Pagedata.components.hero.moreButton} labelClose={Pagedata.components.hero.moreButtonClose}>
          {Pagedata.components.hero.moreText}
        </ContentCollapse>}
      </Highlight>
      {Pagedata.components.searchMain && <SearchMain {...Pagedata.components.searchMain}></SearchMain>}
      {Pagedata.components.sectionIntro && <SectionIntro {...Pagedata.components.sectionIntro}></SectionIntro>}
      {Pagedata.components.highLights.map((hl,index) => {
        return(
          <Highlight key={"hl-"+index} {...hl}/>
        )
      })}
    </Template>
  )
}

export default Home;
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
