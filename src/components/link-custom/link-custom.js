import React from "react"
import Icon from "../icon/icon"
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
    <a
      className={linkStyles}
      href={url}
      target={blank ? "_blank" : undefined}
    >
      {icon ? <Icon {...icon}/> : ''}
      {image ? <img src={image} aria-hidden="true" className={imageStyles}/> : ''}
      <strong className={labelSmall ? 'small' : null}>{label}</strong>
    </a>
  )
}

export default LinkCustom
