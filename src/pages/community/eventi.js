import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import Link from "../../components/link/link"
import { graphql } from "gatsby"

const EventsArchive = ({ data }) => {
  const { edges, totalCount } = data.allContent
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } "Eventi"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const {pathname} = node.seo
          const {title} = node.components.hero
          return (
            <li key={pathname}>
              <Link to={pathname}>{title}</Link>
            </li>
          )
        })}
      </ul>
     </div>
  )
}

export default EventsArchive

export const pageQuery = graphql`
  query {
    allContent(
      filter: {metadata: {archive: {in: "eventi"}}}
      sort: {order: DESC, fields: seo___pathname}
    ) {
      totalCount
      edges {
        node {
          components {
            hero {
              title
            }
          }
          seo {
            pathname
          }
        }
      }
    }
  }
`
