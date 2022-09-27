import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Icon from "../components/icon/icon"
import Button from "../components/button/button"
import Pagedata from "../data/pages/buttons.yaml"

const Buttons = () => {
	return (
	  <Template>

	  </Template>
	)
}

export default Buttons

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
)