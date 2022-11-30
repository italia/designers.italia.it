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
  const anchor = /^(")/.test(to) // <---- unnecessary?

  const styleInternal = {
    outline: '2px dotted lime'
  }

  const styleExternal = {
    outline: '2px dotted red'
  }

  // Use Gatsby Link for internal links, and <a> for others
  if (!external && !anchor) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        <span style={styleInternal}>{children}</span>
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      <span style={styleExternal}>{children}</span>
    </a>
  )
}

export default Link
