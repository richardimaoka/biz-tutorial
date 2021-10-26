/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar } from "./ProgressBar";
import { PageElements } from "./PageElements";

export const LessonContent = () => {
  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
  ];

  return (
    <div
      css={css`
        max-width: 768px;
        min-height: calc(100vh - 10px);
        border: solid 1px;
      `}
    >
      <ProgressBar currentPage={3} pages={pages} />
      <PageElements />
    </div>
  );
};
