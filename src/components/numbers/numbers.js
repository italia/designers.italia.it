import React from "react"
import "./numbers.scss"
import Icon from "../icon/icon"

const Numbers = ({props}) => {

  //numbers
	let NumbersRender
	if (props) {
		NumbersRender = props.map((num,index) => {
			return(
        <div className="numbers d-flex justify-content-start align-content-start mb-3 mb-md-4 me-5" key={"number-"+index}>
          <Icon
            icon={num.icon}
            size="lg"
            className="me-2"
          />
          <div className="number font-monospace fw-normal h2 me-4 mb-0">{num.number}</div>
          <div className="label"><small><strong>{num.label}</strong></small></div>
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
