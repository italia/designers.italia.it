import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import ListItem from "../list-item/list-item"
import Tag from "../tag/tag"
import { useStaticQuery, graphql } from "gatsby"

const ListArchiveEvents = ({
  background,
  noSpace,
}) => {

  const data = useStaticQuery(graphql`
    query {
      allContent(
        filter: {metadata: {archive: {in: "eventi"}}}
        sort: {order: DESC, fields: seo___pathname}
      ) {
        totalCount
        edges {
          node {
            id
            metadata {
              template {
                name
              }
            }
            components {
              hero {
                title
                tag {
                  label
                }
                kangaroo {
                  eventInfo {
                    items {
                      title
                      label
                    }
                  }
                }
              }
            }
            seo {
              description
              pathname
            }
          }
        }
      }
    }
  `)

  const { edges, totalCount } = data.allContent
  const tagHeader = `C${totalCount === 1 ? "'è" : "i sono"} ${totalCount} event${totalCount === 1 ? "o" : "i"} in archivio:`

  const iconOpt = {
    icon: 'sprites.svg#it-calendar',
    size: 'sm',
    color: "primary",
    addonClasses: 'mt-1 flex-shrink-0 me-1 me-md-3'
  }

  let container = "container-xxl"
  let row = "row"

  let styles = 'section-editorial'
    + `${background ? ' bg-' + background : ''}`
    + `${noSpace ? ' py-0' : ''}`
    + `${background === "dark" ? ' text-white' : ''}`

  return (
    <section className={styles} aria-describedby="archive-list-title">
      <div className={container}>
        <div className={row}>
          <div className="col-12 g-0">
            <div className="px-3 px-lg-0 px-lg-5">
              <h2 className="border-bottom pb-4" id="archive-list-title">{tagHeader}</h2>
              <div className="it-list-wrapper">
                <ul className="it-list mt-4 mt-md-3">
                  {edges.map(({ node }) => {
                    const { id } = node
                    const { pathname } = node.seo
                    const { title } = node.components?.hero
                    const { description } = node.seo
                    return (
                      <ListItem url={pathname} key={id} iconLeft icon={iconOpt} addonClasses="align-items-start border-bottom-0 pt-3 px-0 px-sm-2 px-md-4">
                        <div className="d-md-flex">
                          <h3 className="h6 mb-0">
                            <strong>{title}</strong>
                          </h3>
                          <div>
                            {node.components?.hero?.tag?.label &&
                              <div className="mb-2 mt-1 mb-md-0 mt-md-0">
                                <Tag label={node.components?.hero?.tag?.label} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal"></Tag>
                              </div>
                            }
                            {node.metadata?.template?.name &&
                              (node.metadata?.template?.name === 'level1' || node.metadata?.template?.name === 'community') ?
                              <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block ">
                                <Tag label="Panoramica" addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal"></Tag>
                              </div>
                              : null}
                          </div>
                        </div>
                        {(node.components?.hero?.kangaroo?.eventInfo?.items || description) &&
                          <p className="text-secondary fw-normal d-block mb-3">
                            {node.components?.hero?.kangaroo?.eventInfo?.items &&
                              <small>{node.components?.hero?.kangaroo?.eventInfo?.items[1].label}</small>} {/*// XXX WE NEED AN UNIVERSAL NEWS DATE FIELD */}
                            <small> — {description}</small>
                          </p>
                        }
                      </ListItem>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ListArchiveEvents
