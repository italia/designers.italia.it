import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Icon from "../components/icon/icon"
import Button from "../components/button/button"
import Pagedata from "../data/pages/buttons.yaml"

const Buttons = () => {
	return (
	  <Template>
			<div className="container mt-3 mb-3">
				<div className="row">
					<div className="col-12">
						<h1>{Pagedata.name}</h1>
						<h2>Simple Button</h2>
						<Button {...Pagedata.components.button1}></Button>
						<Button type="button>">Button da dati in pagina</Button>
						<h2 className="mt-3">Simple Button types</h2>
						{ Pagedata.components.buttonTypes.map((button,index) => {
							return(
								<Button key={"simple-button-"+index} {...button}/>
							)
						})}
						<h2 className="mt-3">Button colors</h2>
						{ Pagedata.components.buttonColors.map((button,index) => {
							return(
								<Button key={"cutton-color-"+index} {...button}/>
							)
						})}
					</div>
				</div>
			</div>
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