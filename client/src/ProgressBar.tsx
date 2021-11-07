/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface ProgressBarProps {
  currentPageNum: number | null;
  numPages: number | null;
}

export const ProgressBar = ({ currentPageNum, numPages }: ProgressBarProps) => {
  if (!currentPageNum || !numPages) {
    return <div />;
  } else {
    const arraySizeOfNumPages = new Array(numPages).fill("");
    return (
      <div
        css={css`
          display: flex;

          div:first-of-type {
            margin-left: 0px;
          }

          div:last-of-type {
            margin-right: 0px;
          }

          div:nth-of-type(${currentPageNum}) {
            background-color: #3edf33;
          }
        `}
      >
        {arraySizeOfNumPages.map((_, index) => (
          <div
            key={index}
            css={css`
              flex-grow: 1;
              height: 20px;
              background-color: #dfdfdf;
              margin-left: 5px;
              margin-right: 5px;
            `}
          ></div>
        ))}
      </div>
    );
  }
};
