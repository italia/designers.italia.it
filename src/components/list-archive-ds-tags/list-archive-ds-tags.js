import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import ListItem from "../list-item/list-item"
import Link from "../link/link"
import Chip from "../chip/chip"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

const ListArchiveDSTags = ({
  background,
  noSpace,
}) => {

  const data = useStaticQuery(graphql`
    query {
      tagsDesignSystem: allContent {
        group(field: components___hero___kangaroo___tagsDesignSystem) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <section className="pb-5" aria-describedby="archive-list-title">
      <div className="px-3 px-lg-0 px-lg-5 d-flex flex-row align-items-center">
        <h3 className="border-end pe-4" id="archive-list-title">Esplora per utilizzo</h3>
        <div className="chips-list-wrapper ps-4">
          <ul className="chips-list chips mt-4 mt-md-3 d-flex flex-wrap">
            {data.tagsDesignSystem.group.map(tag => (
              <ListItem key={tag.fieldValue} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                <Chip label={tag.fieldValue} size="lg" color="primary" path="design-system/componenti/utili-per">
                  <span className="ms-2 badge neutral-2-bg text-secondary my-0 pb-1">{tag.totalCount}</span>
                </Chip>
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    </section >
  )
}

export default ListArchiveDSTags
