import React from "react"
import "./numbers.scss"
import Icon from "../icon/icon"

const Numbers = ({
  items,
  inline
}) => {


  let styles = "numbers-wrapper d-sm-flex flex-wrap align-items-end"
  + `${inline ? ' inline-numbers' : ''}`

  //numbers
	let NumbersRender
	if (items) {
		NumbersRender = items.map((num,index) => {
			return(
        <div className="numbers mb-4 mb-sm-4" key={"number-"+index}>
          <div className="label mb-2"><small><strong>{num.label}</strong></small></div>
          <div className="d-flex align-items-center">
            <Icon
              icon={num.icon}
              size="lg"
              addonClasses="mt-1 me-2"
            />
            <div className="number font-monospace fw-normal display-1">{num.number}</div>
          </div>
        </div>
			)
		})
	}

  return (
    <div className={styles}>
      {NumbersRender}
    </div>
  )
}

export default Numbers
