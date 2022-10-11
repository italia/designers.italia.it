import React from "react"
import Icon from "../icon/icon"

const NavPosition = ({
  data
}) => {

  let  linkItems


  if (data) {
    linkItems = data.map((item,index) => {
      item.icon.addonClasses = "flex-shrink-0 me-3"
      item.icon.hidden = true
      return(
          <div className="d-inline-flex align-items-center me-5 mb-3 small w-auto">
            <Icon {...item.icon}/>
            <span className="text-uppercase text-secondary fw-bold me-3">{item.title}</span>
            <a href={item.url}>{item.label}</a>
          </div>
      )
    })
  }
  return (
    <div className="nav-position py-4">
      <div className="container-xxl">
        <div className="row">
          {linkItems}
        </div>
      </div>
    </div>
  )
}

export default NavPosition
