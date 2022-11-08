import React, { useRef, useEffect } from "react"
import { Collapse } from "bootstrap-italia/dist/bootstrap-italia.esm"
import Icon from "../icon/icon"
import List from "../list/list"
import ListItem from "../list-item/list-item"
import Dropdown from "../dropdown/dropdown"
import "./header-slim.scss"

const HeaderSlim = ({data}) => {

  const collRef = useRef(null)
  const collObjRef = useRef(null)

  const collapseToggle = (evt) => {
    evt.preventDefault()
    if (collObjRef.current) {
      collObjRef.current.toggle()
      toggleAria(evt.currentTarget)
    }
  }

  const toggleAria = (element) => {
    const ariaAttr = element.getAttribute('aria-expanded')
    let newVal = 'true'
    if (ariaAttr === 'true') {
      newVal = 'false'
    }
    element.setAttribute('aria-expanded', newVal)
  }

  useEffect(() => {
    collObjRef.current = new Collapse(collRef.current, { toggle: false })
  })

	return (
		<div className="it-header-slim-wrapper">
			<div className="container-xxl">
				<div className="row">
					<div className="col-12">
						<div className="it-header-slim-wrapper-content">
							<a className="d-none d-lg-block navbar-brand" href="#" data-focus-mouse="false">{data.title}</a>
							<div className="nav-mobile">
								<nav aria-label={data.nav.ariaLabel}>
									<a className="it-opener d-lg-none collapsed" onClick={collapseToggle} /*data-bs-toggle="collapse"*/ href={`#${data.nav.id}`} role="button" aria-expanded="false" aria-controls={data.nav.id} data-focus-mouse="false">
										<span>{data.title}</span>
										<Icon icon="sprites.svg#it-expand" hidden="true"></Icon>
									</a>
									<List ref={collRef} id={data.nav.id} isMenu collapsable>
										{data.nav.items.map((value,index)=>{
											return(
												<ListItem key={'list-item-' + index} url={value.url} active={value.active}>{value.title}</ListItem>
											)
										})}
									</List>
								</nav>
							</div>
							{data.langs &&
								<div className="it-header-slim-right-zone">
									<Dropdown {...data.langs}></Dropdown>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderSlim
