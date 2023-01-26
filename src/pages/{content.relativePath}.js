import * as React from "react"
import { graphql } from "gatsby"

import jsyaml from "js-yaml"

import Template from "../templates/tmpl-level-3"
import { Seo } from "../components/seo/seo"

const Page = ({ pageContext, location, data: { content } }) => {
  const Pagedata = jsyaml.load(content.yaml)

  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export const query = graphql`
 query ($id: String!) {
   content(id: { eq: $id }) {
     id
     yaml
   }
 }
`

export default Page

// export const Head = () => (
// 	<Seo
//     title = {Pagedata.seo.name}
//     description = {Pagedata.seo.description}
//     image = {Pagedata.seo.image}
//     twitterImage = {Pagedata.seo.twitterImage}
//     pathname = {Pagedata.seo.pathname}
//     canonical = {Pagedata.seo.canonical}
//   >
//   </Seo>
// )
