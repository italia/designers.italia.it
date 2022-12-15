import React from "react"
import Link from "../link/link"

const HeaderPre = ({data}) => {

	return (
			<div className="header-pre bg-white py-2 small">
				<div className="container-xxl">
					<div className="text-center">
						<span className="fw-semibold">{data.title}</span> - <Link to={data.url}>{data.link}</Link>
					</div>
				</div>
			</div>
	)
}

export default HeaderPre
