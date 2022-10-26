import React from "react"
import Icon from "../icon/icon"
import Button from "../button/button"
import Chip from "../chip/chip"
import "./topics.scss"

const Topics = ({
  title,
  icon,
  chips,
  button
}) => {

  return (
    <div className="topics py-5">
      <div className="container-xxl">
        <div className="border rounded p-3 py-lg-4 px-md-4">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-9 d-md-flex align-items-center">
              <div className="icon-wrapper d-none d-lg-block flex-shrink-0 me-5">
                <Icon {...icon}/>
              </div>
              <div className="content">
                <h2 className="h4 fw-bold mb-2">{title}</h2>
                {chips && <div className="chip-container">
                  { chips.map((chip,index) => {
                    return(
                      <Chip key={"chip-"+index} {...chip}/>
                    )
                  })}
                </div>
              }
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-4 mt-md-5 d-md-flex justify-content-end align-items-start">
              <Button {...button}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics
