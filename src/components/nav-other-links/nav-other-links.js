import React from "react"
import Icon from "../icon/icon"
import LinkCustom from "../link-custom/link-custom"

const NavOtherLinks = ({
  icon,
  title,
  items
}) => {

  let linkItems

  if (items) {
    linkItems = items.map((item,index) => {
      item.imageClass = "me-3"
      return(
        <div className="col-10 mb-2 mb-md-0 col-md-6 col-lg-3" key={"link-"+index}>
          <LinkCustom {...item}/>
        </div>
      )
    })
  }


  return (
    <div className="nav-other-links pb-5">
      <div className="container-xxl">
      <div className="row">
        <p className="d-flex align-items-center small text-uppercase text-secondary fw-bold">
          <Icon {...icon}/>
          {title}
        </p>
      </div>
        <div className="row">
          {linkItems}
        </div>
      </div>
    </div>
  )
}

export default NavOtherLinks
