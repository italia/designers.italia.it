import React from "react"
import Icon from '../icon/icon'
import "./last-update.scss"

const LastUpdate = ({
  title,
  date,
  licence,
  edit
}) => {
  return (
    <div className="last-update py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col col-md-10 offset-md-1">
            <p class="px-3 px-md-0">
              <small>{title} {date}
                <a
                  href={licence.url}
                  target={licence.blank ? "_blank" : undefined}
                  className="fw-bolder d-block d-md-inline-block text-decoration-none mt-2 mt-md-0 ms-md-5">
                  <strong className="d-inline-block me-2">{licence.label} <Icon {...licence.icon} /></strong>
                </a>
              </small>
            </p>
            <p className="mb-0 px-3 px-md-0">
              <small>
                <a
                  href={edit.url}
                  target={edit.blank ? "_blank" : undefined}
                  className="fw-bolder d-inline-block text-decoration-none">
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
