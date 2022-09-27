import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Pagedata from "../data/pages/dropdown.yaml"
import Dropdown from "../components/dropdown/dropdown"
import List from "../components/list/list"

const Buttons = () => {
	return (
	  <Template>
			<div className="container mt-3 mb-3">
				<div className="row">
					<div className="col-12">
						<h1>{Pagedata.name}</h1>
						<h2>Simple dropdown</h2>
						<Dropdown {...Pagedata.components.dropdownSimple}></Dropdown>
						<h2 className="mt-3">Dropdown button varianti</h2>
						{ Pagedata.components.dropdownButtonVariant.map((dropdown,index) => {
								return(
									<Dropdown key={"drop-down-"+index} {...dropdown}/>
								)
							})}
						<h2 className="mt-3">Dropdown link</h2>
						<Dropdown {...Pagedata.components.dropdownLink}></Dropdown>
						<h2 className="mt-3">Dropup</h2>
						<Dropdown {...Pagedata.components.dropUp}></Dropdown>
						<h2 className="mt-3">Dropdend</h2>
						<Dropdown {...Pagedata.components.dropEnd}></Dropdown>
						<h2 className="mt-3">Dropstart</h2>
						<Dropdown {...Pagedata.components.dropStart}></Dropdown>
						<h2 className="mt-3">Dropdown menu</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenu}></List>
						</div>
						<h2 className="mt-3">Dropdown menu voci disabilitate</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuDisabled}></List>
						</div>
						<h2 className="mt-3">Menu con intestazioni e separatori</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuSeparator}></List>
						</div>
						<h2 className="mt-3">Menu con voci grandi</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuBig}></List>
						</div>
						<h2 className="mt-3">Menu a tutta larghezza</h2>
						<div className="dropdown-menu full-width" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuFull}></List>
						</div>
						<h2 className="mt-3">Menu con icona a destra</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuRightIcon}></List>
						</div>
						<h2 className="mt-3">Menu con icona a sinistra</h2>
						<div className="dropdown-menu" style={{display: "block", position: "relative"}}>
							<List {...Pagedata.components.dropdownMenuLeftIcon}></List>
						</div>
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