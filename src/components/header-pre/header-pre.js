import React from "react"

const HeaderPre = ({data}) => {

	return (
		// XXX remove first wrapper div to view on sticky
		<div className="it-header-slim-wrapper p-0">   
			<div className="header-pre bg-light py-2 small">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="text-center">
							<span className="fw-semibold">{data.title}</span> - <a href={data.url}>{data.link}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderPre
