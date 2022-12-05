import React from "react"

import DOMPurify from 'isomorphic-dompurify'
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'

import loadable from "@loadable/component";

const SyntaxHighlighter = loadable(() => import('./syntax-highlighter'));

const ComponentView = ({
  name,
  content
}) => {

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
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
