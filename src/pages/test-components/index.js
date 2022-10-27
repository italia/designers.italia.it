import * as React from "react"
import Template from "../../templates/level-1"
import List from "../../components/list/list"
import Pagedata from "./index.yaml"

const Index = () => {
  return(
    <Template>
      <div className="container-xxl py-5 py-lg-6">
      <h1 className="mb-5">{Pagedata.name}</h1>
        <List {...Pagedata.components.list}></List>
      </div>
    </Template>
  )
}

export default Index

