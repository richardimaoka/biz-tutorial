/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";
import { PageElements } from "./PageElements";

export interface LessonContentProps {
  progress: ProgressBarProps | null;
}

export const LessonContent = ({ progress }: LessonContentProps) => {
  return (
    <div
      css={css`
        max-width: 768px;
        border: solid 1px #f9f9f9;
      `}
    >
      <ProgressBar
        currentPage={progress.currentPage}
        numPages={progress.numPages}
      />
    </div>
  );
};
