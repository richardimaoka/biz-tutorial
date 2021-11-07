/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";
import { PageComponent, PageComponentProps } from "./PageComponent";
export interface MainProps {
  currentPage: PageComponentProps | null;
  progress: ProgressBarProps | null;
}

export const MainContainer = ({ currentPage, progress }: MainProps) => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 768px;
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
          {currentPage ? <PageComponent title={currentPage.title} /> : <div />}
        </div>
      </div>
    </main>
  );
};
