import * as React from "react"

const Avatar = ({
	size,
	img,
	alt
})=>{
	return (
		<div className={`avatar ${size ? 'size-'+size : undefined}`}><img src={img} alt={alt}/></div>
	)
}

export default Avatar