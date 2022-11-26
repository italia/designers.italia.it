import * as React from "react"
import Template from "../../templates/tmpl-base"
import List from "../../components/list/list"
import Pagedata from "./index.yaml"

const Index = () => {
  return(
    <Template Pagedata={Pagedata}>
      <div className="container-xxl py-5 py-lg-6">
        <div className="row px-3 px-md-0">
          <div className="col-12 col-md-10 offset-md-1">
              <h1 className="mb-4">{Pagedata.seo.name}</h1>
              <List {...Pagedata.components.list}></List>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default Index

