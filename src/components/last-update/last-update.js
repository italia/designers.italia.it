import React from "react"
import Icon from "../icon/icon"
import Link from "../link/link"
import "./last-update.scss"

const LastUpdate = ({
  // location,
  pathname,
  title,
  date,
  licence,
  edit,
  column,
  lastModified,
  noPadding
}) => {
  let editGithubUrl = `https://github.com/italia/designers.italia.it/tree/${process.env.GATSBY_BRANCH}/src/data/content/`  // < fallback if not trackable via pathname let's go to repo root...
  if (pathname) {
    console.log (pathname)
    const filePath = pathname === '/'
      ? "index"
      : pathname.slice(1).replace(/^\/|\/$/g, '')

    editGithubUrl += `${filePath}.yaml`
  }

  let columnStyle = 'col-12'
  // + `${column ? '' : ' col-md-10 offset-md-1'}`
  + ' g-0'

  let paddingStyle = 'px-3'
   + `${noPadding ? '' : ' px-lg-5'}`

  return (
    <div className="last-update py-5 py-lg-7">
      <div className="container-xxl">
        <div className="row">
          <div className={columnStyle}>
            <div className ={paddingStyle}>
              <p>
                <small>
                  <span>{title} </span>
                  <time
                    dateTime={lastModified}
                    title={lastModified}
                  >
                    {new Date(lastModified).toLocaleDateString(
                      'it-IT',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                  <Link
                    to={licence.url}
                    target={licence.blank ? "_blank" : undefined}
                    className="d-block d-md-inline-block text-decoration-none mt-2 mt-md-0 ms-md-5">
                    <strong className="d-inline-block me-2">{licence.label} <span className="visually-hidden">(si apre in una nuova finestra)</span><Icon {...licence.icon} /></strong>
                  </Link>
                </small>
              </p>
              <p className="mb-0">
                <small>
                  <Link
                    to={editGithubUrl}
                    target={edit.blank ? "_blank" : undefined}
                    className="d-inline-block text-decoration-none">
                    <strong className="d-inline-block me-2">{edit.label} <span className="visually-hidden">(si apre in una nuova finestra)</span></strong><Icon {...edit.icon} />
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default LastUpdate
