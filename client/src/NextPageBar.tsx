/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPageButton } from "./NextPageButton";

export const NextPageBar = () => (
  <div
    css={css`
      width: 60px;
      margin-left: 10px;
    `}
  >
    <div
      css={css`
        position: fixed;
        top: 50%;
      `}
    >
      <NextPageButton />
    </div>
  </div>
);
