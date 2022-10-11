import React from "react"
import LinkCustom from "../link-custom/link-custom"

const NavOtherPrevNext = ({
  prev,
  next
}) => {
  let iconPrev = ({
    icon: "sprites.svg#it-arrow-left",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
  })
  let iconNext = {
    icon: "sprites.svg#it-arrow-right",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
  }
  prev.imageClass = "mx-3"
  next.imageClass = "mx-3"
  return (
    <div className="nav-other-prev-next border neutral-1-border-color-a3 py-5 border-end-0 border-start-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col mb-4 mb-md-0 col-md-5 col-lg-4 col-xl-3">
            <LinkCustom {...prev}/>
          </div>
          <div className="col col-md-5 offset-md-2 col-lg-4 offset-lg-4 col-xl-3 offset-xl-6">
            <LinkCustom {...next}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavOtherPrevNext
