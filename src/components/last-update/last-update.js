import React from "react"
import Icon from "../icon/icon"
import "./last-update.scss"

const LastUpdate = ({
  pathname,
  title,
  date,
  licence,
  edit,
  column
}) => {

  const branch = 'next'
  let editGithubUrl = "https://github.com/italia/designers.italia.it/tree/" + branch + "/src/pages/"  // < fallback if not trackable via pathname let's go to repo root...
  if (pathname) {
    let pathSplitted = pathname.split('/')
    pathSplitted.pop()
    let path = pathSplitted.join('/')
    if (path === "") path="index"
    editGithubUrl += path + ".yaml"
  }
  
  let columnStyle = 'col-12'
  + `${column ? '' : ' col-md-10 offset-md-1'}`

  return (
    <div className="last-update py-5 py-lg-7">
      <div className="container-xxl">
        <div className="row">
          <div className={columnStyle}>
            <p className="px-3 px-lg-0">
              <small>{title} {date}
                <a
                  href={licence.url}
                  target={licence.blank ? "_blank" : undefined}
                  className="d-block d-md-inline-block text-decoration-none mt-2 mt-md-0 ms-md-5">
                  <strong className="d-inline-block me-2">{licence.label} <Icon {...licence.icon} /></strong>
                </a>
              </small>
            </p>
            <p className="mb-0 px-3 px-lg-0">
              <small>
                <a
                  href={editGithubUrl}
                  target={edit.blank ? "_blank" : undefined}
                  className="d-inline-block text-decoration-none">
                  <strong className="d-inline-block me-2">{edit.label}</strong><Icon {...edit.icon} />
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastUpdate
