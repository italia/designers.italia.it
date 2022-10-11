import React from "react"
import NavPosition from "../nav-position/nav-position"
import NavOtherLinks from "../nav-other-links/nav-other-links"
import NavOtherPrevNext from "../nav-other-prev-next/nav-other-prev-next"

const NavPreFooter = ({
  navPosition,
  navOtherLinks,
  navOtherPrevNext
}) => {
  return (
    <div className="nav-pre-footer py-5 border neutral-1-border-color-a3 border-end-0 border-start-0">
      {navPosition ? <NavPosition data={navPosition}/> : null}
      {navOtherLinks ? <NavOtherLinks {...navOtherLinks}/> : null}
      {navOtherPrevNext ? <NavOtherPrevNext {...navOtherPrevNext}/> : null}
    </div>
  )
}

export default NavPreFooter
