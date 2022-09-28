import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Pagedata from "../data/pages/list.yaml"
import List from "../components/list/list"

const Buttons = () => {
	return (
	  <Template>
			<div className="container mt-3 mb-3">
				<div className="row">
					<div className="col-12">
						<h1>{Pagedata.name}</h1>
						<h2>Lista semplice solo testo</h2>
						<List {...Pagedata.components.list}></List>
						<h2 className="mt-3">Lista con avatar</h2>
						<List {...Pagedata.components.listAvatar}></List>
						<h2 className="mt-3">Lista con icona</h2>
						<List {...Pagedata.components.listIcon}></List>
						<h2 className="mt-3">Lista con immagine</h2>
						<List {...Pagedata.components.listImg}></List>
						<h2 className="mt-3">Lista con azioni</h2>
						<List {...Pagedata.components.listAction}></List>
						<h2 className="mt-3">Lista con azioni multiple</h2>
						<List {...Pagedata.components.listActionMultiple}></List>
						<h2 className="mt-3">Lista con metadata</h2>
						<List {...Pagedata.components.listMetadata}></List>
						<h2 className="mt-3">Con testo aggiuntivo, azioni multiple e metadata</h2>
						<List {...Pagedata.components.listAll}></List>
						
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