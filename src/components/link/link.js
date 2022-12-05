import React from "react"
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link= ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  // const internal = /^\/(?!\/)/.test(to) <--- from example
  const external = /^http/.test(to)
  const anchor = /#[^\s,]+/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (external || anchor) {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }
  return (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
