import React from "react"
import { useEffect } from "react"
import "./header.scss"

import { Sticky } from "bootstrap-italia"

const Header = ({
  data,
  children
}) => {
  useEffect(() => {
    new Sticky(document.getElementById('header-nav-wrapper'))
  })
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
