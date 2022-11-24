import React from "react"
import ImageResponsive from "../image-responsive/image-responsive"
import "./img-full.scss"

const ImgFull = ({
  img,
  alt
}) => {
  return(
    <div className="img-full mb-5">
      <ImageResponsive imgClassName="w-100 img-fluid" src={img} alt={alt}/>
    </div>
  )
}

export default ImgFull
