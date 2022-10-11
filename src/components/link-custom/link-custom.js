import React from "react"

const LinkCustom = ({
  label,
  url,
  image,
  blank
}) => {
  return (
    <a
      className="link-custom d-inline-flex align-items-center text-decoration-none"
      href={url}
      target={blank ? "_blank" : undefined}
    >
      <img src={image} aria-hidden="true" className="me-2"/>
      <small><strong>{label}</strong></small>
    </a>
  )
}

export default LinkCustom
