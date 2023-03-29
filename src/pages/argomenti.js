import * as React from "react"

import "../scss/styles.scss"
import "../js/globals"

import ListItem from "../components/list-item/list-item"
import Chip from "../components/chip/chip"
import { graphql } from "gatsby"

const TagsPage = ({ data: { allContent: { group } } }) => (
  <div className="mx-5 my-5">
    <h1>Tutti gli argomenti</h1>
    <p className="lead">Lista temporanea per testare il funzionamento archivi per argomento</p>
    <div className="chips-list-wrapper">
      <ul className="chips-list chips mt-4 mt-md-3 d-flex flex-wrap">
        {group.map(tag => (
          <ListItem key={tag.fieldValue} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
            <Chip label={tag.fieldValue} size="lg" color="primary">
              <span className="ms-2 badge neutral-2-bg text-secondary my-0 pb-1">{tag.totalCount}</span>
            </Chip>
          </ListItem>
        ))}
      </ul>
    </div>
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