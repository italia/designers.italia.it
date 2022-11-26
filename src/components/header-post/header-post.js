import React from "react"

let styles;
let countItems = 0;

const HeaderPost = ({data}) => {

	// XXX TO DO: 
	// Add icon to newsletter
	// Newsletter CAPITAL
	// Check A11y
	// Verify if to add a Skiplink dedicated to this "Ti potrebbe interessare" between Menu and Main content

	return (
		<div id={data.nav.id}>
			<nav className="" aria-label={data.nav.ariaLabel}>
				<div className="it-header-slim-wrapper p-0 h-100">   
					<div className="header-pre bg-white py-3 small">
						<div className="container-xxl">
							<div className="row px-4 px-lg-5 pt-2 pt-md-0">
								<div className="col-12">
									<ul className="list-inline mb-0 d-flex flex-column flex-md-row">
										{data.nav.items.map((value,index)=>{
											if (index + 1 === data.nav.items.length) {
												styles="list-item me-auto mb-3 mb-md-0"
											} else {
												styles="list-item me-5 mb-3 mb-md-0"
											}
											return(
											<li key={"banner-item-"+index} className={styles} >
												<a
												href={value.url}
												target={value.blank ? "_blank" : undefined}
												>{value.title}</a>
											</li>
											)
											})}
											<li key={"banner-item-"+countItems+1} className="list-item mb-3 mb-md-0">
												<a
												href={data.nav.newsletter.url}
												target={data.nav.newsletter.blank ? "_blank" : undefined}
												>{data.nav.newsletter.title}</a>
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

export default HeaderPost
