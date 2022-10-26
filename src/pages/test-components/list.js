import * as React from "react"
import Template from "../../templates/level-1"
import {Seo} from "../../components/seo/seo"
import List from "../../components/list/list"
import Pagedata from "./list.yaml"

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
						<h2 className="mt-3">Liste per menù di navigazione</h2>
						<h3 className="mt-3">Linea singola</h3>
						<List {...Pagedata.components.listSingle}></List>
						<h3 className="mt-3">Intestazione e divisore</h3>
						<List {...Pagedata.components.listHeading}></List>
						<h3 className="mt-3">Intestazione con link</h3>
						<List {...Pagedata.components.listHeadingLink}></List>
						<h3 className="mt-3">Large</h3>
						<List {...Pagedata.components.listLarge}></List>
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
