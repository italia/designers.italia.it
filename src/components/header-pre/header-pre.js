import React, { useRef, useEffect } from "react"
import { Collapse } from "bootstrap-italia/dist/bootstrap-italia.esm"
import Icon from "../icon/icon"
import "./header-pre.scss"

const HeaderPre = ({data}) => {

	return (
		<div className=" bg-light py-2 small">
			<div className="container-xxl">
				<div className="row">
					<div className="col-12">
						<div className="it-header-slim-wrapper-content text-bold text-center">
						<span className="fw-semibold">{data.title}</span> - <a className="" href={`${data.url}`} data-focus-mouse="false">{data.link}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderPre
