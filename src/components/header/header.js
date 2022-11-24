import React from "react"
import "./header.scss"

import { Sticky } from "bootstrap-italia/dist/bootstrap-italia.esm"
const sticky = Sticky //trick for treeshaking

const Header = ({
  data,
  children
}) => {
  const styles = "it-header-wrapper"
    + `${data.sticky ? ' it-header-sticky' : ''}`
    + `${data.shadow ? ' shadow' : ''}`
    + `${data.border ? ' border-bottom border-white' : ''}`

  return (
    <header
      className={styles}
      data-bs-toggle={data.sticky ? 'sticky' : ''}
      data-bs-position-type={data.sticky ? 'fixed' : ''}
      data-bs-sticky-class-name={data.sticky ? 'is-sticky' : ''}
      data-bs-target={`#${data.navbar.id}`}>
      {children}
    </header>
  )
}

export default Header
