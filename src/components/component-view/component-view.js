import React from "react"
import { v4 as uuidv4 } from 'uuid'

//import DOMPurify from 'isomorphic-dompurify'
import sanitizeHtml from 'sanitize-html'
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Button from "../button/button"
import Icon from "../icon/icon"
import loadable from "@loadable/component"

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'))

const ComponentView = ({
  content,
  viewer,
  accordionLabel,
  accordionUrl,
  accordionSrLabel
}) => {

  const createMarkup = (html) => {
    return { __html: sanitizeHtml(html, {
      allowedTags: false, //all tags allowed
      allowedAttributes: false, //all attribs allowed
    }) };
  }

  const ICON_EXTERNAL = {
    icon: "sprites.svg#it-external-link",
    size: "sm",
    color: "primary",
    addonClasses: "align-middle me-3",
  }

  const uuid = 'component-view-' + uuidv4()
  const accId = uuid + '-accordion'
  const headId = uuid + '-heading'
  const collId = uuid + '-collapse'
  let responsiveButtonsItems

  if (viewer) {
    responsiveButtonsItems = (viewer.responsiveButtons).map((item,index) => {
      return(
        <Button key={"rb"-+index} {...item}/>
      )
    })
  }

  let componentStyles = "bg-light p-3 p-md-5"
    + `${responsiveButtonsItems ? ' pt-4' : ''}`

  return (
    <>
      <div className={componentStyles}>
        {responsiveButtonsItems &&
          <div className="d-flex align-items-center justify-content-center mb-4">
            {responsiveButtonsItems}
          </div>
        }
        <div dangerouslySetInnerHTML={createMarkup(content)} />
      </div>
      <div className="accordion accordion-left-icon" id={accId}>
        <div className="accordion-item">
          <h3 className="accordion-header d-flex justify-content-between align-items-center" id={headId}>
            <button className="accordion-button border-top-0" type="button" data-bs-toggle="collapse" data-bs-target={'#' + collId } aria-expanded="true" aria-controls={collId}>
              {accordionLabel}
            </button>
			      {accordionUrl &&
              <a href={accordionUrl} target="_blank" aria-label={accordionSrLabel}>
                <Icon {...ICON_EXTERNAL}/>
              </a>
            }
          </h3>

          <div id={collId} className="accordion-collapse collapse show" data-bs-parent={'#' + accId} role="region" aria-labelledby={headId}>
            <div className="accordion-body p-0">
              <SyntaxHighlighter language="markup" style={lucario} showLineNumbers={true}>
                {content}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComponentView
