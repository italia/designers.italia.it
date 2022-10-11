import React from "react"
import Icon from "../icon/icon"
import "./link-custom.scss"

const LinkCustom = ({
  label,
  url,
  image,
  blank,
  specular,
  icon
}) => {
  let linkStyles = "link-custom d-inline-flex align-items-center text-decoration-none"
    + `${specular ? ' flex-row-reverse text-end' : ''}`
  return (
    <a
      className={linkStyles}
      href={url}
      target={blank ? "_blank" : undefined}
    >
      <Icon {...icon}/>
      <img src={image} aria-hidden="true" className="mx-3 flex-shrink-0"/>
      <strong>{label}</strong>
    </a>
  )
}

export default LinkCustom
