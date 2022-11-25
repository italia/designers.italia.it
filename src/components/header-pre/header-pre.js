import React from "react"

const HeaderPre = ({data}) => {

	return (
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
	)
}

export default HeaderPre
