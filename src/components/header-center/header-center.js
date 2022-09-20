import React from "react"
import Icon from "../icon/icon"



const HeaderCenter = ({data}) => {
	
	//-search zone
	function search(boolean) {
		if (boolean) {
			return(
				<div className="it-search-wrapper">
					<a className="search-link rounded-icon" aria-label={data.search.title} href={data.search.url}>
						<Icon icon={data.search.icon}/>
					</a>
				</div>
			)
		}
	}


	//-socials zone
	function socials(boolean) {
		if (boolean) {
			return (
				<div className="it-socials d-none d-md-flex">
					<span>{data.socials.title}</span>
					<ul>
						{data.socials.items.map((value,index)=>{
							return(
								<li>
									<a href={value.url} aria-label={value.title} target="_blank">
										<Icon icon={value.icon}/>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			)
		}
	}
	
	return (
		<div className="it-header-center-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="it-header-center-content-wrapper">
							<div className="it-brand-wrapper">
								<a href="#">
									<Icon icon="sprites.svg#it-designers-italia" hidden/>
									<div className="it-brand-text">
										<div className="it-brand-title">{data.title}</div>
									</div>
								</a>
							</div>
							<div className="it-right-zone">
								{socials(data.socials)}
								{search(data.search)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderCenter