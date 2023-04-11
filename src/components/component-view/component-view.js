import React, { useState, useEffect } from "react"
import uniqueId from "lodash/uniqueId"

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Button from "../button/button"
import Checkbox from "../checkbox/checkbox"
import Icon from "../icon/icon"
import loadable from "@loadable/component"

import "./component-view.scss"

import { Notification } from 'bootstrap-italia'

const slugify = require('slugify')

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'))

const ComponentView = ({
  name,
  source,
  content,
  viewer,
  idPrefix,
  accordionOpen,
  accordionShow,
  accordionLabel,
  accordionUrl,
  accordionSrLabel,
  accordionSrCopyLabel,
}) => {

  const ICON_EXTERNAL = {
    icon: "sprites.svg#it-external-link",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-4 mb-1",
    ariaLabel: " (Link esterno)"
  }

  const ICON_COPY_CODE = {
    icon: "sprites.svg#it-copy",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-4 mb-1 mt-1",
    ariaLabel: " Copia il codice negli appunti"
  }

  const ICON_FULLSCREEN = {
    icon: "sprites.svg#it-fullscreen",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-4 mb-1",
    ariaLabel: " Mostra in una finestra dedicata"
  }

  const ICON_SUCCESS = {
    icon: "sprites.svg#it-check-circle",
  }

  const initAutoHeight = () => {
    const iframes = document.querySelectorAll('iframe')
    if (!iframes) return
    iframes.forEach((iframe) => {
      if (!iframe) return
      const exampleContainer = iframe.contentWindow.document.getElementsByClassName("bd-example")[0]
      if (!exampleContainer) return
      iframe.height = exampleContainer.clientHeight
      exampleContainer.addEventListener("click", () => {
        setTimeout(() => {
          iframe.height = exampleContainer.clientHeight + 50
        }, 50)
      })
    })
  }

  useEffect(() => {
    initAutoHeight()
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      iframe.addEventListener("load", initAutoHeight)
      iframe.addEventListener("transitionend", initAutoHeight)
    })
  })

  const theme = a11yDark;

  const copyToClipboard = (e, code) => {
    e.preventDefault()
    navigator.clipboard.writeText(code)
    const notification = new Notification(document.getElementById(`${idPrefix}-copyToast`), {
      timeout: 3000
    })
    notification.show()
  }

  const uuid = `${idPrefix}-component-view-${uniqueId('id_')}`
  const accId = `${uuid}-accordion`
  const headId = `${uuid}-heading`
  const collId = `${uuid}-collapse`
  const [wrappedCode, setWrappedCode] = useState(false)

  content = content.replace(/^\s+|\s+$/g, '')

  const [previewWidth, setPreviewWidth] = useState(" viewer-desktop")
  const changeResolution = (e) => {
    e.preventDefault()
    let res = e.target.textContent // mobile, tablet, desktop
    setPreviewWidth(` viewer-${res}`)
  }

  let responsiveButtonsItems
  if (viewer) {
    responsiveButtonsItems = (viewer.responsiveButtons).map((item, index) => {
      return (
        <Button onClick={(e) => changeResolution(e)} key={"rb" + index} {...item} />
      )
    })
  }

  let componentStyles = "border-bottom p-3 d-flex flex-column align-items-center"
    + `${responsiveButtonsItems ? ' pb-4' : ''}`

  let accordionStyle = "accordion-collapse collapse"
    + `${accordionOpen ? ' show' : ' hide'}`
  let accordionButtonStyle = "accordion-button border-top-0 collapsed"
    + `${accordionOpen ? ' collapsed' : ''}`

  const BSIExampleUrl = `/examples/${source}/${slugify(name).toLowerCase()}.html`

  return (
    <div id={uuid}>
      <div className={componentStyles}>
        <span className="visually-hidden">Inizio componente:</span>
        <iframe id={`${idPrefix}-iframe`} src={BSIExampleUrl} title={`Variante: ${name}`} className={`w-100 rounded border iframe-example ${previewWidth}`}></iframe>
        <span className="visually-hidden">Fine componente.</span>
        {responsiveButtonsItems &&
          <div className="responsive-buttons d-none d-lg-block">
            <div className="d-flex align-items-center justify-content-center pb-2 pt-4 mt-2">
              {viewer.label &&
                <span className="small pe-3 text-secondary fw-semibold">{viewer.label}</span>
              }
              {responsiveButtonsItems}
            </div>
          </div>
        }
      </div>
      {accordionShow &&
        <div className="accordion accordion-left-icon" id={accId}>
          <div className="accordion-item">
            <div className="d-flex justify-content-between align-items-center" id={headId}>
              <h2 id={`${idPrefix}-codeViewer`} className="accordion-header ">
                <button className={accordionButtonStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#${collId}`} aria-expanded={accordionOpen} aria-controls={collId}>
                  {accordionLabel}
                </button>
              </h2>
              <div className="d-flex justify-content-between align-items-center">
                {content &&
                  <Button onClick={(e) => copyToClipboard(e, content)} aria-label={accordionSrCopyLabel} addonStyle="p-0 shadow-none">
                    <Icon {...ICON_COPY_CODE} />
                  </Button>
                }
                <a href={BSIExampleUrl} target="_blank" rel="noreferrer" aria-label="Mostra il solo componente in una finestra dedicata">
                  <Icon {...ICON_FULLSCREEN} />
                </a>
                {accordionUrl &&
                  <a href={accordionUrl} target="_blank" rel="noreferrer" aria-label={accordionSrLabel}>
                    <Icon {...ICON_EXTERNAL} />
                  </a>
                }
              </div>
            </div>

            <div id={collId} className={accordionStyle} data-bs-parent={'#' + accId} role="region" aria-labelledby={headId}>
              <div className="accordion-body p-0">
                <div aria-hidden="true" className="d-flex flex-row-reverse">
                  {content &&
                    <Checkbox id={`${idPrefix}-wrap`} label='Mostra codice a capo' customStyle={'me-4'} checked={wrappedCode} handleChange={(val) => setWrappedCode(val)} />
                  }
                </div>
                <SyntaxHighlighter language="markup" style={theme} showLineNumbers={true} wrapLines={wrappedCode} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}>
                  {content}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="notification with-icon right-fix success dismissable fade" role="alert" aria-labelledby={`${idPrefix}-not1d-title`} id={`${idPrefix}-copyToast`}>
              <span id={`${idPrefix}-not1d-title`} className="h5 "><Icon {...ICON_SUCCESS} />Codice copiato negli appunti</span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ComponentView
