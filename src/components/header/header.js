import React from "react"
import "./header.scss"

const Header = ({ data, children }) => {
  const styles = "it-header-wrapper"
    + `${data.sticky ? ' it-header-sticky' : ''}`
    + `${data.shadow ? ' shadow' : ''}`
  
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
