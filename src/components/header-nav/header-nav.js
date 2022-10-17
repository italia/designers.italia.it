import * as React from "react"
import Button from "../button/button"
import Icon from "../icon/icon"
import HeaderMenu from "../header-menu/header-menu"
import HeaderMenuItem from "../header-menu-item/header-menu-item"
import HeaderMenuLink from "../header-menu-link/header-menu-link"
import DropdownMenu from "../dropdown-menu/dropdown-menu"
import Megamenu from "../megamenu/megamenu"

const HeaderNav = ({data,page}) => {
	return(
	<div className={`it-header-navbar-wrapper {data.theme}`} id={data.id}>
		<div className="container-xxl">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg has-megamenu" aria-label={data.ariaLabel}>
						<Button customStyle="custom-navbar-toggler" type="button" dataBsToggle="navbarcollapsible" ariaControls={data.nav.id} ariaExpanded="false" srOnly={data.toggler.srOnly}>
							<Icon icon="sprites.svg#it-burger"/>
						</Button>
						<div className="navbar-collapsable" id={data.nav.id}>
							<div className="overlay"></div>
							<div className="close-div">
								<Button addonStyle="close-menu">
									<Icon icon="sprites.svg#it-close-big"/>
								</Button>
							</div>
							<HeaderMenu>
								{data.nav.voices.map((value,index)=>{
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
					</nav>
				</div>
			</div>
		</div>
	</div>
	)
}

export default HeaderNav
