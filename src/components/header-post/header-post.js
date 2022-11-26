import React from "react"
import ReactMarkdown from "react-markdown"
import Icon from "../icon/icon"

let styles;
let countItems = 0;

let iconNewsletter = ({
    icon: "sprites.svg#it-mail",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
    addonClasses: "ms-2"
  })

const HeaderPost = ({data}) => {

	// XXX TO DO: 
	// Check A11y
	// Verify if to add a Skiplink dedicated to this "Ti potrebbe interessare" between Menu and Main content
	if (data.isActive){
		return (
			<div id={data.nav.id}>
				<nav className="" aria-label={data.nav.ariaLabel}>
					<div className="it-header-slim-wrapper p-0 h-100">   
						<div className="header-pre bg-white py-4 border-bottom border-200 /*shadow-sm*/">
							<div className="container-xxl">
								<div className="row px-4 px-lg-5 pt-2 pt-md-0">
									<div className="col-12">
										<ul className="list-inline mb-0 d-flex flex-column flex-md-row align-items-center">
											{data.nav.items.map((value,index)=>{
												if (index + 1 === data.nav.items.length) { // last on the left side has "me-auto"
													styles="list-item me-md-auto mb-3 mb-md-0"
												} else {
													styles="list-item me-md-5 mb-3 mb-md-0"
												}
												return(
												<li key={"banner-item-"+index} className={styles} >
													<a
													href={value.url}
													target={value.blank ? "_blank" : undefined}
													>
														<Icon {...value.icon}/>
														{value.title && <ReactMarkdown components={{ p: "span" }}>{value.title}</ReactMarkdown>}
													</a>
												</li>
												)
											})}
											<li key={"banner-item-"+countItems+1} className="list-item mb-1 mb-md-0 mt-3 mt-md-0">
												<a
												className="simple-cta fw-semibold"
												href={data.nav.newsletter.url}
												target={data.nav.newsletter.blank ? "_blank" : undefined}
												>
													<span class="text-end">
														{data.nav.newsletter.title}
													</span>
													<Icon {...iconNewsletter}/>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default HeaderPost
