import * as React from "react"

import "../scss/styles.scss"
import "../js/globals"

import Link from "../components/link/link"
import { graphql } from "gatsby"

const Tags = ({pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContent
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

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
      <Link to="/argomenti">All tags</Link>
     </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContent(
      filter: {components: {hero: {kangaroo: {tags: {in: [$tag]}}}}}
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
