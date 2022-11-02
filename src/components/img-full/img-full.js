import React from "react"

const ImgFull = ({
  img,
  alt
}) => {
  return(
    <div className="img-full mb-5">
      <img className="w-100" src={img} alt={alt}/>
    </div>
  )
}

export default ImgFull
