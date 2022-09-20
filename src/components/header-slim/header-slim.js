import * as React from "react"
import Icon from "../icon/icon"
import List from "../list/list"
import ListItem from "../list-item/list-item"

const HeaderSlim = ({data}) => {
	return (
		<div className="it-header-slim-wrapper theme-dark">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="it-header-slim-wrapper-content">
							<a className="d-none d-lg-block navbar-brand" href="#" data-focus-mouse="false">{data.title}</a>
							<div className="nav-mobile">
								<nav aria-label="Navigazione secondaria">
									<a className="it-opener d-lg-none collapsed" data-bs-toggle="collapse" href={`#${data.nav.id}`} role="button" aria-expanded="false" aria-controls={data.nav.id} data-focus-mouse="false">
										<span>{data.title}</span>
										<Icon icon="sprites.svg#it-expand" hidden="true"></Icon>
									</a>
									<List id={data.nav.id} isMenu collapsable>
										{data.nav.items.map((value,index)=>{
											return(
												<ListItem key={'item-' + index} url={value.url} active={value.active}>{value.title}</ListItem>
											)
										})}
									</List>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderSlim