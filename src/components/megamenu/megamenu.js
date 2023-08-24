import * as React from "react"
import ReactMarkdown from "react-markdown"
import List from "../list/list"
import Icon from "../icon/icon"
import Link from "../link/link"
import './megamenu.scss'

import ImageResponsive from "../image-responsive/image-responsive"

function Megamenu({
	left,
	heading,
	cols
}) {

	const GATSBY_ACTIVE = "active"

	return (
		<div className="megamenu pb-5 pb-lg-0">
			<div className="row">
				<div className="col-xs-12 col-lg-4 px-0">
					<div className="row">
						{left &&
							<div className="col-12 it-vertical it-description pb-lg-3">
								<div className="description-content img-max-megamenu ps-4 ps-sm-5 ms-3">
									{left.img &&
										<div className="ratio ratio-megamenu lightgrey-bg-a1 mb-4 rounded">
											<ImageResponsive className="rounded" src={left.img} alt={left.imgAlt} loading="eager" />
										</div>
									}
									{left.text &&
										<ReactMarkdown>{left.text}</ReactMarkdown>
									}
								</div>
							</div>
						}
					</div>
				</div>
				<div className="col-12 col-lg-8">
					{heading &&
						<div className="heading-link-wrapper">
							<Link className="heading-link d-flex-inline align-items-center" to={heading.url} activeClassName={GATSBY_ACTIVE}>
								<Icon icon="sprites.svg#it-arrow-right-triangle" size="sm" color="primary" addonClasses="me-2" />
								<span>{heading.label}</span>
							</Link>
						</div>
					}
					{cols &&
						<div className="row">
							{cols.map((col, index) => (
									<div key={`megalist-${  index}`} className="col-12 col-lg-6">
										<List {...col} isDropdown="true" />
									</div>
								))}
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Megamenu
