import * as React from "react"
import ReactMarkdown from "react-markdown"
import List from "../list/list"
import Icon from "../icon/icon"
import Link from "../link/link"
import './megamenu.scss'

import ImageResponsive from "../image-responsive/image-responsive"

const Megamenu = ({
	info,
	heading,
	cols
}) => {

	const GATSBY_ACTIVE = "active"

	return (
		<div className="megamenu pb-5 pb-lg-0">
			<div className="row /*align-items-center*/">
				<div className="col-xs-12 col-lg-4 px-0">
					<div className="row">
						{info &&
							<div className="col-12 it-vertical it-description pb-lg-3">
								<div className="description-content img-max-megamenu ps-4 ps-sm-5 ms-3">
									{info.img &&
										<div className="ratio ratio-megamenu lightgrey-bg-a1 mb-4 rounded">
											{/*<img className="rounded" src={info.img} alt={info.imgAlt}/>*/}
											<ImageResponsive className="rounded" src={info.img} alt={info.imgAlt} loading="eager" />
										</div>
									}
									{info.text &&
										<ReactMarkdown>{info.text}</ReactMarkdown>
									}
								</div>
							</div>
						}
					</div>
				</div>
				<div className="col-12 col-lg-8 order-first">
					{heading &&
						<Link className="heading-link d-flex justify-content-between align-items-center" to={heading.url} activeClassName={GATSBY_ACTIVE}>
							<span>{heading.label}</span>
							<Icon icon="sprites.svg#it-arrow-right" size="sm" color="primary"></Icon>
						</Link>
					}
					{cols &&
						<div className="row">
							{cols.map((col, index) => {
								return (
									<div key={"megalist-" + index} className="col-12 col-lg-6">
										<List {...col} isDropdown="true"></List>
									</div>
								)
							})}
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Megamenu
