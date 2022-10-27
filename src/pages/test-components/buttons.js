import * as React from "react"
import Template from "../../templates/level-1"
import {Seo} from "../../components/seo/seo"
import Button from "../../components/button/button"
import Pagedata from "./buttons.yaml"

const Buttons = () => {
	return (
	  <Template>
			<div className="container-xxl my-5">
				<div className="row">
					<div className="col-12">
						<h1 className="mb-5">{Pagedata.name}</h1>
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
						<h2 className="mt-3">Link disabilitato</h2>
						<Button {...Pagedata.components.disabledLink}></Button>
						<h2 className="mt-3">Sfondo scuro</h2>
						<div className="bg-dark ps-1 p-2">
							{ Pagedata.components.buttonColors.map((button,index) => {
								return(
									<Button key={"button-color-2-"+index} {...button}/>
								)
							})}
						</div>
						<h2 className="mt-3">Pulsanti con icona</h2>
						{ Pagedata.components.buttonIcon.map((button,index) => {
								return(
									<Button key={"button-icon-"+index} {...button}/>
								)
							})}
						<h2 className="mt-3">Pulsanti con icona cerchiata</h2>
						{ Pagedata.components.buttonIconCircle.map((button,index) => {
								return(
									<Button key={"button-icon-circle-"+index} {...button}/>
								)
							})}
						<h2 className="mt-3">Dimensioni</h2>
						{ Pagedata.components.buttonSize.map((button,index) => {
								return(
									<Button key={"button-size-"+index} {...button}/>
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
