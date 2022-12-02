import * as React from "react"
import ReactMarkdown from "react-markdown"
import List from "../list/list"
import Icon from "../icon/icon"
import Link from "../link/link"
import './megamenu.scss'

import ImageResponsive from "../image-responsive/image-responsive"

const Megamenu = ({
	left,
	heading,
	cols
}) => {
	return(
		<div className="megamenu pb-5 pb-lg-0">
			<div className="row /*align-items-center*/">
			<div className="col-xs-12 col-lg-4 px-0">
				<div className="row">
					{left &&
						<div className="col-12 it-vertical it-description pb-lg-3">
							<div className="description-content img-max-megamenu ps-4 ps-sm-5 ms-3">
								{left.img &&
									<div className="ratio ratio-megamenu lightgrey-bg-a1 mb-4 rounded">
										{/*<img className="rounded" src={left.img} alt={left.imgAlt}/>*/}
										<ImageResponsive className="rounded" src={left.img} alt={left.imgAlt}/>
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
              <Link className="heading-link d-flex justify-content-between align-items-center" to={heading.url}>
                <span>{heading.label}</span>
                <Icon icon="sprites.svg#it-arrow-right" size="sm" color="primary"></Icon>
              </Link>
						}
						{cols &&
							<div className="row">
								{cols.map((col,index)=>{
									return(
										<div  key={"megalist-"+index} className="col-12 col-lg-6">
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
