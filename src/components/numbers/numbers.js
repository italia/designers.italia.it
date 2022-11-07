import React from "react"
import "./numbers.scss"
import Icon from "../icon/icon"

const Numbers = ({
  items
}) => {

  //numbers
	let NumbersRender
	if (items) {
		NumbersRender = items.map((num,index) => {
			return(
        <div className="numbers d-flex justify-content-start align-content-start mb-3 mb-md-4 me-5" key={"number-"+index}>
          <div className="label me-auto"><small><strong>{num.label}</strong></small></div>
          <Icon
            icon={num.icon}
            size="lg"
            addonClasses="ms-4"
          />
          <div className="number font-monospace fw-normal h2 mb-0">{num.number}</div>
        </div>
			)
		})
	}

  return (
    <div className="d-md-flex flex-wrap">
      {NumbersRender}
    </div>
  )
}

export default Numbers
