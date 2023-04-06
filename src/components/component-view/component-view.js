import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

//import DOMPurify from 'isomorphic-dompurify'
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
  accordionLabel,
  accordionUrl,
  accordionSrLabel,
  accordionSrCopyLabel
}) => {

  const initAutoHeight = () => {
    const iframe = document.querySelector('iframe')
    if (!iframe) return
    const exampleContainer = iframe.contentWindow.document.getElementsByClassName("bd-example")[0]
    if (!exampleContainer) return
    iframe.height = exampleContainer.clientHeight
    exampleContainer.addEventListener("click", () => {
      setTimeout(() => {
        iframe.height = exampleContainer.clientHeight + 50
      }, 300)
    })
  }

  useEffect(() => {
    initAutoHeight()
    const iframe = document.querySelector('iframe')
    iframe.addEventListener("load", initAutoHeight)
  });

  const theme = a11yDark;

  const copyToClipboard = (e, code) => {
    e.preventDefault()
    navigator.clipboard.writeText(code)
    const notification = new Notification(document.getElementById(`${idPrefix}-copyToast`), {
      timeout: 3000
    })
    notification.show()
  }

  const ICON_EXTERNAL = {
    icon: "sprites.svg#it-external-link",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-3 mb-1",
    ariaLabel: " (Link esterno)"
  }

  const ICON_COPY_CODE = {
    icon: "sprites.svg#it-copy",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-3 mb-1",
    ariaLabel: " Copia il codice negli appunti"
  }

  const ICON_SUCCESS = {
    icon: "sprites.svg#it-check-circle",
  }

  const uuid = `${idPrefix}-component-view-${uuidv4()}`
  const accId = `${uuid}-accordion`
  const headId = `${uuid}-heading`
  const collId = `${uuid}-collapse`
  let responsiveButtonsItems
  const [wrappedCode, setWrappedCode] = useState(false)

  content = content.replace(/^\s+|\s+$/g, '')

  if (viewer) {
    responsiveButtonsItems = (viewer.responsiveButtons).map((item, index) => {
      return (
        <Button key={"rb" + index} {...item} />
      )
    })
  }

  let componentStyles = "bg-light p-3"
    + `${responsiveButtonsItems ? ' pt-4' : ''}`

  let accordionStyle = "accordion-collapse collapse"
    + `${accordionOpen ? ' show' : ' hide'}`
  let accordionButtonStyle = "accordion-button border-top-0 collapsed"
    + `${accordionOpen ? ' collapsed' : ''}`

  return (
    <>
      <div className={componentStyles}>
        {responsiveButtonsItems &&
          <div className="d-flex align-items-center justify-content-center mb-4">
            {responsiveButtonsItems}
          </div>
        }
        <span className="visually-hidden">Inizio componente:</span> {/* xxx move string to src/data/ */}
        <iframe src={`/examples/${source}/${slugify(name).toLowerCase()}.html`} title="Titolo componente" className="w-100 iframe-example"></iframe>
        <span className="visually-hidden">Fine componente.</span>  {/* xxx move string to src/data/ */}
      </div>
      <div className="accordion accordion-left-icon" id={accId}>
        <div className="accordion-item">
          <div className="d-flex justify-content-between align-items-center" id={headId}>
            <h2 id={`${idPrefix}-codeViewer`} className="accordion-header ">
              <button className={accordionButtonStyle} type="button" data-bs-toggle="collapse" data-bs-target={`#${collId}`} aria-expanded={accordionOpen} aria-controls={collId}>
                {accordionLabel}
              </button>
            </h2>
            <div className="d-flex justify-content-between align-items-center">
              <div aria-hidden="true" className="me-4 d-none d-sm-block">
                {content &&
                  <Checkbox id={`${idPrefix}-wrap`} label='Wrap' customStyle={'me-3'} checked={wrappedCode} handleChange={(val) => setWrappedCode(val)} />
                }
              </div>
              {content &&
                <Button onClick={(e) => copyToClipboard(e, content)} aria-label={accordionSrCopyLabel}>
                  <Icon {...ICON_COPY_CODE} />
                </Button>
              }
              {accordionUrl &&
                <a href={accordionUrl} target="_blank" rel="noreferrer" aria-label={accordionSrLabel}>
                  <Icon {...ICON_EXTERNAL} />
                </a>
              }
            </div>
          </div>

          <div id={collId} className={accordionStyle} data-bs-parent={'#' + accId} role="region" aria-labelledby={headId}>
            <div className="accordion-body p-0">
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
    </>
  )
}

export default ComponentView
