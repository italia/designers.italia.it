import React from "react"
import Icon from "../icon/icon"
import Link from "../link/link"
import { StaticQuery, graphql } from "gatsby"

import "./last-update.scss"

const LastUpdate = ({
  // location,
  pathname,
  title,
  date,
  licence,
  edit,
  column
}) => {

  let editGithubUrl = `https://github.com/italia/designers.italia.it/tree/${process.env.GATSBY_BRANCH}/src/pages/`  // < fallback if not trackable via pathname let's go to repo root...
  let pathYaml = ''
  if (pathname) {
    
    let pathSplitted = pathname.split('/')
    pathSplitted.pop()
    let path = pathSplitted.join('/')
    if (path === "") path="index"
    pathYaml = path.replace(/^\/|\/$/g, '') + ".yaml"
    console.log(pathYaml)
    editGithubUrl += pathYaml
  }
  
  let columnStyle = 'col-12'
  + `${column ? '' : ' col-md-10 offset-md-1'}`

  return (

    <StaticQuery
      query={graphql`
        query LastUpdateQuery {
          allFile(filter: { relativePath: { eq: "level1/componenti/componente.yaml" } }) {
            edges {
              node {
                id
                relativePath
                fields {
                  gitLogLatestDate
                }
              }
            }
          }
        }
      `}
      render={data => (
          <div className="last-update py-5 py-lg-7">
          <div className="container-xxl">
            <div className="row">
              <div className={columnStyle}>
                <p className="px-3 px-lg-0">
                  <small>{title} {date}
                    <Link
                      to={licence.url}
                      target={licence.blank ? "_blank" : undefined}
                      className="d-block d-md-inline-block text-decoration-none mt-2 mt-md-0 ms-md-5">
                      <strong className="d-inline-block me-2">{licence.label} <Icon {...licence.icon} /></strong>
                    </Link>
                  </small>
                </p>
                <p className="mb-0 px-3 px-lg-0">
                  <small>
                    <Link
                      to={editGithubUrl}
                      target={edit.blank ? "_blank" : undefined}
                      className="d-inline-block text-decoration-none">
                      <strong className="d-inline-block me-2">{edit.label}</strong><Icon {...edit.icon} />
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default LastUpdate
