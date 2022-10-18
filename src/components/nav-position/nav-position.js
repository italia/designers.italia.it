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
          <div key={"linkItems-"+index} className="d-inline-flex align-items-center me-5 mb-3 small w-auto">
            <Icon {...item.icon}/>
            <span className="text-uppercase text-secondary me-3"><strong>{item.title}</strong></span>
            <a href={item.url}>{item.label}</a>
          </div>
      )
    })
  }
  return (
    <div className="nav-position">
      <div className="container-xxl">
        <div className="row">
          {linkItems}
        </div>
      </div>
    </div>
  )
}

export default NavPosition
