import * as React from "react"

import "../../scss/styles.scss"
import "../../js/globals"

import ListItem from "../../components/list-item/list-item"
import Tag from "../../components/tag/tag"
import { graphql } from "gatsby"

const NewsArchive = ({ data }) => {
  const { edges, totalCount } = data.allContent
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } "Notizie"`

  const iconOpt = {
    icon: 'sprites.svg#it-file',
    size: 'sm',
    color: "primary",
    addonClasses: 'mt-1 flex-shrink-0 me-1 me-md-3'
  }

  return (
    <div>
      <h1>{tagHeader}</h1>
      <div className="it-list-wrapper">
        <ul className="it-list mt-4 mt-md-3">
          {edges.map(({ node }) => {
            const {id} = node.id
            const {pathname} = node.seo
            const {title} = node.components?.hero
            const {description} = node.seo
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
              {(node.components?.hero?.kangaroo?.personalInfo?.items || description) && 
               <p className="text-secondary fw-normal d-block mb-3">
                  {node.components?.hero?.kangaroo?.personalInfo?.items && 
                  <small>{node.components?.hero?.kangaroo?.personalInfo?.items[1].label}</small>} {/*// XXX WE NEED AN UNIVERSAL NEWS DATE FIELD */}
                  <small> — {description}</small>
                </p>
              }
              </ListItem>
            )
          })}
        </ul>
      </div>
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
                personalInfo {
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
`
