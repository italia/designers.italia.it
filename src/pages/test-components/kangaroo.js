import * as React from "react"
import Template from "../../templates/tmpl-base"
import Kangaroo from "../../components/kangaroo/kangaroo"
import Pagedata from "./kangaroo.yaml"

const Kangaroos = ({ pageContext }) => {
	return(
		<Template Pagedata={Pagedata} pageContext={pageContext}>
			<div className="container-xxl my-5">
				<div className="row">
					<div className="col-12">
            <h1 className="mb-5">{Pagedata.name}</h1>
					{ Pagedata.components.kangaroos.map((kang,index) => {
							return(
								<Kangaroo key={"kang-"+index} {...kang}/>
							)
						})}
					</div>
				</div>
			</div>

		</Template>
	)
}

export default Kangaroos
