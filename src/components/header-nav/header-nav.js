import React, { useEffect, useRef } from "react"
import Button from "../button/button"
import Icon from "../icon/icon"
import HeaderMenu from "../header-menu/header-menu"
import HeaderMenuItem from "../header-menu-item/header-menu-item"
import HeaderMenuLink from "../header-menu-link/header-menu-link"
import DropdownMenu from "../dropdown-menu/dropdown-menu"
import Megamenu from "../megamenu/megamenu"
import { NavBarCollapsible } from "bootstrap-italia"
import "./header-nav.scss"

const HeaderNav = ({
  data,
  page
}) => {

  const collRef = useRef(null)
  const navBar = useRef(null)

  useEffect(() => {
    navBar.current = new NavBarCollapsible(collRef.current)
    return () => {
      if (navBar.current) {
        navBar.current.hide()
        // document.scrollingElement.scrollTop = 0 //reset page scroll
      }
    }
  })

	return(
	<div className={`it-header-navbar-wrapper {data.theme}`} id={data.id}>
		<div className="container-xxl">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg has-megamenu" aria-label={data.ariaLabel}>
						<Button customStyle="custom-navbar-toggler" type="button" dataBsToggle="navbarcollapsible" ariaControls={data.nav.id} ariaExpanded="false" ariaLabel={data.toggler.ariaLabel}>
							<Icon icon="sprites.svg#it-burger"/>
						</Button>
						<div className="navbar-collapsable" ref={collRef} id={data.nav.id}>
							<div className="overlay"></div>
							<div className="close-div">
								<Button addonStyle="close-menu" ariaLabel={data.close.ariaLabel}>
									<Icon icon="sprites.svg#it-close-big"/>
								</Button>
							</div>
							<div className="menu-wrapper justify-content-lg-between">
								<HeaderMenu>
									{data.nav.voicesLeft.map((value,index)=>{
										return(
											<HeaderMenuItem key={"item-header-"+index} isDropDown={value.isDropDown} isMegaMenu={value.isMegaMenu}>
												<HeaderMenuLink key={"item-menu-"+index} isDropDown={value.isDropDown} label={value.label} idMegamenu={value.idMegamenu} page={page}></HeaderMenuLink>
												<DropdownMenu key={"dropDown-"+index} idMegamenu={value.idMegamenu}>
													{value.megamenu &&
														<Megamenu key={"mega-"+index} {...value.megamenu}></Megamenu>
													}
												</DropdownMenu>
											</HeaderMenuItem>
										)
									})}
								</HeaderMenu>
								<HeaderMenu>
									{data.nav.voicesCenter.map((value,index)=>{
										return(
											<HeaderMenuItem key={"item-header-"+index} isDropDown={value.isDropDown} isMegaMenu={value.isMegaMenu}>
												<HeaderMenuLink key={"item-menu-"+index} isDropDown={value.isDropDown} label={value.label} idMegamenu={value.idMegamenu} page={page}></HeaderMenuLink>
												<DropdownMenu key={"dropDown-"+index} idMegamenu={value.idMegamenu}>
													{value.megamenu &&
														<Megamenu key={"mega-"+index} {...value.megamenu}></Megamenu>
													}
												</DropdownMenu>
											</HeaderMenuItem>
										)
									})}
								</HeaderMenu>
								<HeaderMenu>
									{data.nav.voicesRight.map((value,index)=>{
										return(
											<HeaderMenuItem key={"item-header-"+index} isDropDown={value.isDropDown} isMegaMenu={value.isMegaMenu}>
												<HeaderMenuLink key={"item-menu-"+index} isDropDown={value.isDropDown} label={value.label} idMegamenu={value.idMegamenu} page={page}></HeaderMenuLink>
												<DropdownMenu key={"dropDown-"+index} idMegamenu={value.idMegamenu}>
													{value.megamenu &&
														<Megamenu key={"mega-"+index} {...value.megamenu}></Megamenu>
													}
												</DropdownMenu>
											</HeaderMenuItem>
										)
									})}
								</HeaderMenu>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</div>
	)
}

export default HeaderNav
