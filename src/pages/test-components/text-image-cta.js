import * as React from "react"
import Template from "../../templates/tmpl-base"
import TextImageCta from "../../components/text-image-cta/text-image-cta"
import Pagedata from "./text-image-cta.yaml"

const Buttons = () => {
	return (
	  <Template>
			<div className="container-xxl my-5">
				<div className="row justify-content-center">
          <div className="col-12 mb-3">
          <h1 className="mb-5">{Pagedata.name}</h1>
          </div>
					<div className="col-12 col-md-10 col-lg-7">

						<TextImageCta {...Pagedata.components.textImageCta1}/>
            <TextImageCta {...Pagedata.components.textImageCta2}/>
            <TextImageCta {...Pagedata.components.textImageCta3}/>
					</div>
				</div>
			</div>
	  </Template>
	)
}

export default Buttons
