/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PrevPageBar } from "./PrevPageBar";
import { LessonContent } from "./LessonContent";
import { NextPageBar } from "./NextPageBar";

export const MainContainer = () => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <PrevPageBar />
        <LessonContent />
        <NextPageBar />
      </div>
    </main>
  );
};
