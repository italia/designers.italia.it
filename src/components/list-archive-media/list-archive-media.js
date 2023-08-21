import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import ListItem from "../list-item/list-item"
import Tag from "../tag/tag"

function ListArchiveMedia({
  background,
  noSpace,
}) {

  const data = useStaticQuery(graphql`
    query {
      allContent(
        filter: {metadata: {archive: {in: "media"}}}
        sort: { seo: { pathname: DESC } }
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

  const { edges } = data.allContent
  const tagHeader = 'Esplora l’archivio'

  const iconOpt = {
    icon: 'sprites.svg#it-video',
    size: 'sm',
    color: "primary",
    addonClasses: 'mt-1 flex-shrink-0 me-1 me-md-3'
  }

  const styles = classNames(
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
                          <div className="mb-3">
                            {node.components?.hero?.tag?.label &&
                              <div className="mb-2 mt-1 mb-md-0 mt-md-0">
                                <Tag label={node.components?.hero?.tag?.label} addonClasses="ms-md-4 text-uppercase px-2 py-0 fw-normal" />
                              </div>
                            }
                            {node.metadata?.template?.name &&
                              (node.metadata?.template?.name === 'level1' || node.metadata?.template?.name === 'community') ?
                              <div className="mb-2 mt-1 mb-md-0 mt-md-0 d-table d-sm-table d-md-inline-block ">
                                <Tag label="Panoramica" addonClasses="ms-md-4 text-uppercase bg-primary px-2 py-0 fw-normal" />
                              </div>
                              : null}
                          </div>
                        </div>
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

export default ListArchiveMedia
