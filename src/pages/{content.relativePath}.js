import * as React from "react"
import { graphql } from "gatsby"

import jsyaml from "js-yaml"

import TemplateBase from "../templates/tmpl-base"
import TemplateDSDetail from "../templates/tmpl-design-system-detail"
import TemplateDSIndex from "../templates/tmpl-design-system-index"
import TemplateHome from "../templates/tmpl-home"
import TemplateLV1Community from "../templates/tmpl-level-1-community"
import TemplateLV1 from "../templates/tmpl-level-1"
import TemplateLV2 from "../templates/tmpl-level-2"
import TemplateLV3 from "../templates/tmpl-level-3"
import TemplateLV4 from "../templates/tmpl-level-4"
import { Seo } from "../components/seo/seo"

const TEMPLATES = {
  'community' : TemplateLV1Community,
  'level1' : TemplateLV1,
  'level2' : TemplateLV2,
  'level3' : TemplateLV3,
  'level4' : TemplateLV4,
  'base' : TemplateBase,
  'home' : TemplateHome,
  'design-system-detail' : TemplateDSDetail,
  'design-system-index' : TemplateDSIndex
}

const Page = ({ pageContext, location, data: { content } }) => {
  const Pagedata = jsyaml.load(content.yaml)
  const Template = Pagedata.metadata.template ? TEMPLATES[Pagedata.metadata.template.name] : TemplateBase
  const lastModified = content.parent.fields.gitLogLatestDate
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location} lastModified={lastModified}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export const query = graphql`
  query ($id: String!) {
    content(id: { eq: $id }) {
      id
      yaml
      parent {
        ... on File {
          fields {
            gitLogLatestDate
          }
        }
      }
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
