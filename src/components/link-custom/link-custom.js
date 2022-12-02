import React from "react"
import ImageResponsive from "../image-responsive/image-responsive"
import Icon from "../icon/icon"
import Link from "../link/link"
import "./link-custom.scss"

const LinkCustom = ({
  label,
  labelSmall,
  url,
  image,
  imageClass,
  blank,
  specular,
  icon
}) => {
  let linkStyles = "link-custom d-inline-flex align-items-center text-decoration-none"
    + `${specular ? ' flex-row-reverse text-end' : ''}`
  let imageStyles = "flex-shrink-0"
    + `${imageClass ? ' '+imageClass : ''}`
  return (
    <Link
      className={linkStyles}
      to={url}
      target={blank ? "_blank" : undefined}
    >
      {icon ? <Icon {...icon}/> : ''}
      {image ? <ImageResponsive src={image} aria-hidden="true" imgClassName={imageStyles}/> : ''}
      <strong className={labelSmall ? 'small' : null}>{label}</strong>
    </Link>
  )
}

export default LinkCustom
