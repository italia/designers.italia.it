import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Pagedata from "../data/pages/index.yaml"

const Index = () => {
  return(
    <Template>

    </Template>
  )
}

export default Index

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
)