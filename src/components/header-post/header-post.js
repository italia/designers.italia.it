import React from "react"
import ReactMarkdown from "react-markdown"
import Icon from "../icon/icon"
import Link from "../link/link"
import "./header-post.scss"

let styles

let iconNewsletter = ({
    icon: "sprites.svg#it-mail",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
    addonClasses: "ms-2"
  })

const HeaderPost = ({data}) => {
	if (data.isActive){
		return (
			<section aria-labelledby={data.nav.id}>
					<div className="it-header-slim-wrapper p-0 h-100">
						<div className="header-pre bg-white border-bottom border-100 w-100 shadow-sm">
							<div className="container-xxl">
								<div className="row ">
									<div className="col-12 g-0">
										<div className="header-post-wrapper">
											<span id={data.nav.id} className="visually-hidden">{data.nav.ariaLabel}</span>
											<ul className="list-inline py-4 px-4 px-lg-5 mb-0 d-flex align-items-center flex-nowrap overflow-x-list">
												{data.nav.items.map((value,index)=>{
													if (index + 1 === data.nav.items.length) { // last on the left side has "me-auto"
														styles="list-item text-nowrap me-5 me-md-auto"
													} else {
														styles="list-item text-nowrap me-5"
													}
													return(
													<li key={"banner-item-"+index} className={styles} >
														<Link
														to={value.url}
														target={value.blank ? "_blank" : undefined}
														>
															<Icon {...value.icon}/>
															{value.title && <ReactMarkdown components={{ p: "span" }}>{value.title}</ReactMarkdown>}
														</Link>
													</li>
													)
												})}
												<li key={"banner-item-"+data.nav.items.length+1} className="list-item text-nowrap ms-5 me-md-0">
													<Link
													className="simple-cta fw-semibold"
													to={data.nav.newsletter.url}
													target={data.nav.newsletter.blank ? "_blank" : undefined}
													>
														<span className="text-end">
															{data.nav.newsletter.title}
														</span>
														<Icon {...iconNewsletter}/>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		)
	}
}

export default HeaderPost
