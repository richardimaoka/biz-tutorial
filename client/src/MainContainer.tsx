/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";
import { Page, PageProps } from "./Page";
export interface MainProps {
  currentPage: PageProps | null;
  progress: ProgressBarProps | null;
}

export const MainContainer = ({ currentPage, progress }: MainProps) => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
          max-width: 768px;
          border: solid 1px #f9f9f9;
        `}
      >
        {progress ? (
          <ProgressBar
            currentPageNum={progress.currentPageNum}
            numPages={progress.numPages}
          />
        ) : (
          <div />
        )}
        {currentPage ? <Page title={currentPage.title} /> : <div />}
      </div>
    </main>
  );
};
