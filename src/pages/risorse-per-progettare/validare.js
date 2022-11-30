import * as React from "react"
import Template from "../../templates/tmpl-level-2"
import {Seo} from "../../components/seo/seo"

<<<<<<<< HEAD:src/pages/risorse-per-progettare/progettare.js
import Pagedata from "./realizzare.yaml"
========
import Pagedata from "./validare.yaml"
>>>>>>>> next:src/pages/risorse-per-progettare/validare.js

const Level2 = () => {
  return(
    <Template Pagedata={Pagedata}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default Level2

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
