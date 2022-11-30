import * as React from "react"
import Template from "../templates/tmpl-home"
import {Seo} from "../components/seo/seo"
import Pagedata from "./home.yaml"
import Highlight from "../components/highlight/highlight"
import SearchMain from "../components/search-main/search-main"

const Home = () =>{
  return(
    <Template Pagedata={Pagedata}>
      {Pagedata.components.hero && <Highlight {...Pagedata.components.hero}></Highlight>}
      {Pagedata.components.searchMain && <SearchMain {...Pagedata.components.searchMain}></SearchMain>}
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
