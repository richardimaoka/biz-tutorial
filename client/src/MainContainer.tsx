/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PrevPageBar } from "./PrevPageBar";
import { LessonContent, LessonContentProps } from "./LessonContent";
import { NextPageBar } from "./NextPageBar";

export interface MainProps {
  lesson: LessonContentProps | null;
}

export const MainContainer = ({ lesson }: MainProps) => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {lesson ? <LessonContent progress={lesson.progress} /> : <div />}
      </div>
    </main>
  );
};
