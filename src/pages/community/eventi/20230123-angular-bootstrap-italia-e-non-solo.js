import * as React from "react"
import Template from "../../../templates/tmpl-level-3"
import {Seo} from "../../../components/seo/seo"

import Pagedata from "./20230123-angular-bootstrap-italia-e-non-solo.yaml"

const ArticleDetail = ({ pageContext,location }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      {/* place extra components / HTML here */}
    </Template>
  )
}

export default ArticleDetail

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
