import React from "react"
import Icon from "../icon/icon"
import "./testimonials.scss"

const Testimonials =(
  {
    items
  }
)=>{
  return (
    <div className="testimonials">
      <div className="row justify-content-lg-between">
        {items.map((item,index) => {
          return(
            <div key={"col-"+index} className="col-12 col-lg-5">
              <div className="testimonial-wrapper d-flex mb-5 mb-lg-0">
                <div className="icon-zone me-4">
                  <div className="icon-wrapper d-flex align-items-center justify-content-center">
                    <Icon {...item.icon}></Icon>
                  </div>
                </div>
                <div className="testimonial-text mt-4">
                  <p className="font-serif h5 mb-4">
                    <em>{item.text}</em>
                  </p>
                  <span className="d-flex justify-content-end fw-medium">
                    <em>— @{item.signature}</em>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
