import React from "react"
import './subscribe.scss'
import Button from "../button/button"

const Subscribe =({
	label,
	id,
	idForm,
	action,
	button,
	labelClass
})=>{
	let labelStyle = 'active'
	+ `${labelClass ? ' '+labelClass : ''}`
	return(
		<div className="subscribe">
			<form id={idForm} action={action}>
				<div className="form-group mb-0 me-3">
					<label htmlFor={id} className={labelStyle}>{label}</label>
					<input type="email" className="form-control" id={id}></input>
				</div>
				<Button {...button}></Button>
			</form>
		</div>
	)
}

export default Subscribe
