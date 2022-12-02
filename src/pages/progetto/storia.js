import * as React from "react"
import Template from "../../templates/tmpl-level-2"
import {Seo} from "../../components/seo/seo"

<<<<<<<< HEAD:src/pages/risorse-per-progettare/organizzare.js
import Pagedata from "./organizzare.yaml"
========
import Pagedata from "./storia.yaml"
>>>>>>>> next:src/pages/progetto/storia.js

const Level2 = ({ pageContext }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext}>
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
