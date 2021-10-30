/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import Prism from "prismjs";

interface FileContentProps {
  filecontent: string;
}

export const FileContent = ({ filecontent }: FileContentProps): JSX.Element => {
  const codeElement = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current);
    }
  });

  return (
    <div
      css={css`
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <pre>
        <code ref={codeElement} className={"lang-js"}>
          {filecontent}
        </code>
      </pre>
    </div>
  );
};
