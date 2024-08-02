'use client'
import React from 'react'
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai.css";

import { useEffect, useRef } from "react";

hljs.registerLanguage("javascript", javascript);

const CodeSnippet = ({ codeDescription }: any) => {
  const codeRef: any = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <pre>
      <code className="javascript" ref={codeRef}>
        {`${codeDescription}`}
      </code>
    </pre>
  );
};

export default CodeSnippet;