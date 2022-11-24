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
        <div className="numbers mb-3 mb-md-4 pe-3" key={"number-"+index}>
          <div className="label"><small><strong>{num.label}</strong></small></div>
          <div className="d-flex align-items-center">
            <Icon
              icon={num.icon}
              size="lg"
              addonClasses="mt-1 mt-sm-2 me-1"
            />
            <div className="number font-monospace fw-normal display-1">{num.number}</div>
          </div>
        </div>
			)
		})
	}

  return (
    <div className="numbers-wrapper d-md-flex flex-wrap">
      {NumbersRender}
    </div>
  )
}

export default Numbers
