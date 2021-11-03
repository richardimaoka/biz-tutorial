/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar } from "./ProgressBar";
import { PageElements } from "./PageElements";

export const LessonContent = () => {
  const pages = [
    { pageNumber: 1 },
    { pageNumber: 2 },
    { pageNumber: 3 },
    { pageNumber: 4 },
    { pageNumber: 5 },
    { pageNumber: 6 },
  ];

  return (
    <div
      css={css`
        max-width: 768px;
        border: solid 1px #f9f9f9;
      `}
    >
      <ProgressBar currentPage={3} pages={pages} />
      <PageElements />
    </div>
  );
};
