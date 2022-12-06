import React from "react"
import { v4 as uuidv4 } from 'uuid';

//import DOMPurify from 'isomorphic-dompurify'
import sanitizeHtml from 'sanitize-html';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Button from "../button/button";
import loadable from "@loadable/component";

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'));

const ComponentView = ({
  content,
  viewer,
  codeLabel,
  codeUrl,
}) => {

  const createMarkup = (html) => {
    return { __html: sanitizeHtml(html, {
      allowedTags: false, //all tags allowed
      allowedAttributes: false, //all attribs allowed
    }) };
  }

  const uuid = 'component-view-' + uuidv4()
  const accId = uuid + '-accordion'
  const headId = uuid + '-heading'
  const collId = uuid + '-collapse'
  let responsiveButtonsItems

  if (viewer.responsiveButtons) {
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
      <div class="accordion accordion-left-icon" id={accId}>
        <div class="accordion-item">
          <h3 class="accordion-header no_toc" id={headId}>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#' + collId } aria-expanded="true" aria-controls={collId}>
              {codeLabel}
            </button>
          </h3>
          {codeUrl && <a href={codeUrl} title="">{codeUrl}</a>}
          <div id={collId} class="accordion-collapse collapse show" data-bs-parent={'#' + accId} role="region" aria-labelledby={headId}>
            <div class="accordion-body p-0">
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
