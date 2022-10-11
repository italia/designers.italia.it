import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Kangaroo from "../components/kangaroo/kangaroo"
import Pagedata from "../data/pages/kangaroo.yaml"

const Kangaroos = () => {
	return(
		<Template>
			<div className="container-xxl">
				<div className="row">
					<div className="col-12">
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

export const Head = () => (
	<Seo
    title = {Pagedata.name}
    description = {Pagedata.description}>
  </Seo>
 )
