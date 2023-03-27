import * as React from "react"
import kebabCase from "lodash/kebabCase"

import "../scss/styles.scss"
import "../js/globals"

import Link from "../components/link/link"
import { graphql } from "gatsby"

const TagsPage = ({data: { allContent: { group }}}) => (
  <div>
    <h1>Tutti gli argomenti</h1>
    <p className="lead">Lista temporanea per testare il funzionamento archivi per argomento</p>
    <ul>
      {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/argomenti/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    allContent {
      group(field: components___hero___kangaroo___tags) {
        fieldValue
        totalCount
      }
    }
  }
`