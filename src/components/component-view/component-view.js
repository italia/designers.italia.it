import React from "react"

//import DOMPurify from 'isomorphic-dompurify'
import sanitizeHtml from 'sanitize-html';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'

import loadable from "@loadable/component";

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'));

const ComponentView = ({
  content
}) => {

  const createMarkup = (html) => {
    return { __html: sanitizeHtml(html, {
      allowedTags: false, //all tags allowed
      allowedAttributes: false, //all attribs allowed
    }) };
  }

  return (
    <>

      <div dangerouslySetInnerHTML={createMarkup(content)} />

      <SyntaxHighlighter language="markup" style={lucario} showLineNumbers={true}>
        {content}
      </SyntaxHighlighter>

    </>
  )
}

export default ComponentView
