import React, { useRef, useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

import { Collapse } from "bootstrap-italia"

import Icon from "../icon/icon"

import "./content-collapse.scss"

const ContentCollapse = ({
  label,
  labelClose,
  children,
}) => {

  const icon = ({
    icon: "sprites.svg#it-collapse",
    size: "sm",
    align : "middle",
    color :"primary",
    hidden: true,
    addonClasses: "ms-2"
  })

  const collRef = useRef(null)
  const collObjRef = useRef(null)
  //const id = 'content-collapse-' + new Date().getTime()

  const [id, setId] = useState('content-collapse-')

  const collapseToggle = (evt) => {
    evt.preventDefault()
    if (collObjRef.current) {
      collObjRef.current.toggle()
      toggleAria(evt.currentTarget)
    }
  }

  const toggleAria = (element) => {
    const ariaAttr = element.getAttribute('aria-expanded')
    let newVal = 'true'
    if (ariaAttr === 'true') {
      newVal = 'false'
    }
    element.setAttribute('aria-expanded', newVal)
  }

  useEffect(() => {
    collObjRef.current = new Collapse(collRef.current, { toggle: false })
    setId('content-collapse-' + new Date().getTime())
  }, [])

  return <div className="content-collapse">
    <a href="#" role="button" onClick={collapseToggle} className="read-more mt-3 d-inline-flex align-items-center text-decoration-none" /*data-bs-toggle="collapse" data-bs-target={'#'+id+'ReadMore'}*/ aria-expanded="false" aria-controls={id}>
      <span className="more-text">{label}</span>
      <span className="less-text">{labelClose}</span>
      <Icon {...icon}/>
    </a>
    <div ref={collRef} className="collapse" id={id}>
      <ReactMarkdown className="mt-4">{children}</ReactMarkdown>
    </div>
  </div>
}

export default ContentCollapse
