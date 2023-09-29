import React, { useState, useEffect } from "react"
import uniqueId from "lodash/uniqueId"

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import loadable from "@loadable/component"
import { Notification } from 'bootstrap-italia'
import Button from "../button/button"
import Checkbox from "../checkbox/checkbox"
import Icon from "../icon/icon"

import "./component-view.scss"
import viewerData from "../../data/component-viewer.yaml"

const slugify = require('slugify')

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'))

function ComponentView({
  variantName,
  source,
  content,
  idPrefix,
  viewerHeight,
  minHeight,
  accordionOpen,
  accordionShow,
  accordionUrl,
  accordionSrCopyLabel,
  componentViewerData,
}) {

  let contentTrimmed = content?.trim();

  if (componentViewerData?.variants) { // it is not a Componenti page, but a Fondamenti with one or more viewers...
    contentTrimmed = componentViewerData
      .variants
      .filter(item => item.name === variantName)[0]
      ?.content
      ?.trim()
  }

  const { viewer, accordionLabel, accordionSrLabel } = viewerData

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
    const iframe = document.getElementById(`${idPrefix}-iframe`)
    if (!iframe) return
    const exampleContainer = iframe.contentWindow.document.getElementsByClassName("bd-example")[0]
    if (!exampleContainer) return
    if (viewerHeight === 0 || !viewerHeight) {
      // auto height
      if (!minHeight) {
        iframe.classList.add("min-default-height")
      } else {
        iframe.style.minHeight = `${minHeight}px`
      }
      iframe.height = exampleContainer.clientHeight + 50
      exampleContainer.addEventListener("click", () => {
        setTimeout(() => {
          iframe.height = exampleContainer.clientHeight + 50
        }, 50)
      })
      const tabs = document.querySelector('.nav-tabs')
      if (!tabs) return
      tabs.addEventListener("click", () => {
        setTimeout(() => {
          iframe.height = exampleContainer.clientHeight + 50
        }, 50)
      })
    } else if (viewerHeight > 0) {
      // fixed width
      iframe.height = viewerHeight + 50
      exampleContainer.classList.add("h-100")
    }
  }

  useEffect(() => {
    initAutoHeight()
    const iframe = document.getElementById(`${idPrefix}-iframe`)
    if (!iframe) return
    iframe.addEventListener("load", initAutoHeight)
    iframe.addEventListener("transitionend", initAutoHeight)
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

  const [previewWidth, setPreviewWidth] = useState(" viewer-desktop")
  const changeResolution = (e) => {
    e.preventDefault()
    const res = e.target.textContent // mobile, tablet, desktop
    setPreviewWidth(` viewer-${res}`)
  }

  let responsiveButtonsItems
  if (viewer) {
    responsiveButtonsItems = (viewer.responsiveButtons).map((item, index) => (
        <Button onClick={(e) => changeResolution(e)} key={`rb${  index}`} {...item} />
      ))
  }

  const componentStyles = "border-bottom p-xl-3 d-flex flex-column align-items-center"
    + `${responsiveButtonsItems ? ' pb-4' : ''}`

  const accordionStyle = "accordion-collapse collapse"
    + `${accordionOpen ? ' show' : ' hide'}`
  const accordionButtonStyle = "accordion-button border-top-0 collapsed"
    + `${accordionOpen ? ' collapsed' : ''}`

  const BSIExampleUrl = `/examples/${source}/${slugify(variantName).toLowerCase()}.html`

  return (
    <div id={uuid} className="pb-4 mb-5">
      {contentTrimmed &&
        <div className={componentStyles}>
          <span className="visually-hidden">Inizio componente:</span>
          <iframe
            id={`${idPrefix}-iframe`}
            src={BSIExampleUrl}
            title={`Variante: ${variantName}`}
            className={`w-100 rounded border shadow-sm iframe-example ${previewWidth}`}
          />
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
      }
      {(contentTrimmed && accordionShow) &&
        <div className="accordion accordion-left-icon" id={accId}>
          <div className="accordion-item">
            <div className="d-flex justify-content-between align-items-center" id={headId}>
              <h2 id={`${idPrefix}-codeViewer`} className="accordion-header ">
                <button className={accordionButtonStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#${collId}`} aria-expanded={accordionOpen} aria-controls={collId}>
                  {accordionLabel}
                </button>
              </h2>
              <div className="d-flex justify-content-between align-items-center">
                {contentTrimmed &&
                  <Button onClick={(e) => copyToClipboard(e, contentTrimmed)} aria-label={accordionSrCopyLabel} addonStyle="p-0 shadow-none">
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

            <div id={collId} className={accordionStyle} data-bs-parent={`#${  accId}`} role="region" aria-labelledby={headId}>
              <div className="accordion-body p-0">
                <div aria-hidden="true" className="d-flex flex-row-reverse">
                  {contentTrimmed &&
                    <Checkbox id={`${idPrefix}-wrap`} label='Mostra codice a capo' customStyle="me-4" checked={wrappedCode} handleChange={(val) => setWrappedCode(val)} />
                  }
                </div>
                {content &&
                  <SyntaxHighlighter language="markup" style={theme} showLineNumbers wrapLines={wrappedCode} lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}>
                    {content}
                  </SyntaxHighlighter>
                }
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
