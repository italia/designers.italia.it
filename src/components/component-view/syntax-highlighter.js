import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './prism-a11y-dark.css';

const SyntaxHighlighter = ({
  children,
  language = 'markup',
  showLineNumbers = true,
  wrapLines = false
}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children, language, wrapLines]);

  const preClasses = [
    `language-${language}`,
    showLineNumbers ? 'line-numbers' : '',
    wrapLines ? 'wrap-lines' : ''
  ].filter(Boolean).join(' ');

  const codeClasses = `language-${language}`;

  return (
    <pre
      className={preClasses}
      style={wrapLines ? {
        whiteSpace: "pre-wrap"  
      } : {}}
    >
      <code
        ref={codeRef}
        className={codeClasses}
      >
        {children}
      </code>
    </pre>
  );
};

export default SyntaxHighlighter;