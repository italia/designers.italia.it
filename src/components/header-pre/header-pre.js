import React from "react"
import Link from "../link/link"

const HeaderPre = ({data}) => {

	return (
		// XXX remove first wrapper div to view on sticky
		<div className="it-header-slim-wrapper p-0">
			<div className="header-pre bg-light py-2 small">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<div className="text-center">
							<span className="fw-semibold">{data.title}</span> - <Link to={data.url}>{data.link}</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderPre
