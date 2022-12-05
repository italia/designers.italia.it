import * as React from "react"
import Template from "../templates/tmpl-base"
import {Seo} from "../components/seo/seo"

import Pagedata from "./index-dev.yaml"

const Index = ({ pageContext }) => {
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext}>
      <div className="container-xxl py-5 py-lg-6">
        <div className="row px-3 px-md-0">
          <div className="col-12 col-md-10 offset-md-1">
            <h1 className="mb-4">Home page special dev</h1>
            <h2>Templates</h2>
            <ul>
              <li>
                <a href="../level1/">Level 1</a>
                <ul>
                  <li>
                    <a href="../community/">Community exception</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="../level1/level2/">Level 2</a>
                <ul>
                  <li>
                    <a href="../level1/fondamenti/">Design System - Fondamenti</a>
                    <ul>
                      <li>
                        <a href="../level1/fondamenti/fondamento/">Scheda Fondamento</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="../level1/componenti/">Design System - Componenti</a>
                    <ul>
                      <li>
                        <a href="../level1/componenti/componente/">Scheda Componente</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="../level1/level2/level3/">Level 3</a>
                <ul>
                  <li>
                    <a href="../level1/level2/article-detail/">Article detail (same template)</a>
                  </li>
                </ul>
              </li>
              <li><a href="../level1/level2/level3/level4/">Level 4</a></li>
            </ul>
            <hr className="my-4"/>
            <h2>Components</h2>
            <ul>
              <li><a href="../test-components">Components list (partial)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default Index

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
