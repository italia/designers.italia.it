import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import Link from "../../components/link/link"
import { graphql } from "gatsby"

const NewsArchive = ({ data }) => {
  const { edges, totalCount } = data.allContent
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } "Notizie"`

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

export default NewsArchive

export const pageQuery = graphql`
  query {
    allContent(
      filter: {metadata: {archive: {in: "notizie"}}}
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
