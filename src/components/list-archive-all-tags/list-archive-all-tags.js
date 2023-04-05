import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import ListItem from "../list-item/list-item"
import Chip from "../chip/chip"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

const ListArchiveAllTags = ({
  background,
  noSpace,
}) => {

  const data = useStaticQuery(graphql`
    query {
      allContent {
        group(field: components___hero___kangaroo___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  let styles = classNames(
    'section-editorial',
  {
    [`bg-${background}`]: background, 
    'py-0': noSpace, 
    'text-white': (background === "dark")
  })

  return (
    <section className={styles} aria-describedby="archive-list-title">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className="px-3 px-lg-0 px-lg-5">
              <h2 className="border-bottom pb-4" id="archive-list-title">Esplora gli argomenti</h2>
              <div className="chips-list-wrapper">
                <ul className="chips-list chips mt-4 mt-md-3 d-flex flex-wrap">
                  {data.allContent.group.map(tag => (
                    <ListItem key={tag.fieldValue} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                      <Chip label={tag.fieldValue} size="lg" color="primary">
                        <span className="ms-2 badge neutral-2-bg text-secondary my-0 pb-1">{tag.totalCount}</span>
                      </Chip>
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ListArchiveAllTags
