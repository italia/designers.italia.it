import React from "react"
import ImageResponsive from "../image-responsive/image-responsive"
import Icon from "../icon/icon"
import "./image-icons.scss"

const ImageIcons = ({
  image,
  alt,
  icons,
  images,
  background,
  customStyle
}) => {

  let styles = 'image-icons'
	+ `${background ? ' bg-'+background : ''}`
  + `${customStyle ? ' '+customStyle : ''}`

  let iconItems
  let imagesItems

  if (icons) {
    iconItems = icons.map((item,index) => {
      item.icon.addonClasses = "flex-shrink-0"
      item.icon.hidden = true
      return(
        <Icon {...item.icon} key={"icons-"+index}/>
      )
    })
  }

  if (images) {
    imagesItems = images.map((item,index) => {
      return(
        <ImageResponsive src={item.img} alt={item.alt} key={"image-"+index}/>
      )
    })
  }


  return (
    <div className={styles}>
      <div className="container-xxl">
        <div className="row position-relative">
          <div className="col g-0">
            <ImageResponsive src={image} alt={alt} className="w-100" imgClassName="img-fluid w-100"/>
          </div>
          {(iconItems || imagesItems) && (
              <div className="icons position-absolute top-0 start-50 translate-middle-x h-100 d-flex align-items-center justify-content-between">
                  {iconItems}
                  {imagesItems}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ImageIcons
