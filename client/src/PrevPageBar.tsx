/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PrevPageButton } from "./PrevPageButton";

export const PrevPageBar = () => (
  <div
    css={css`
      width: 60px;
      margin-right: 10px;
    `}
  >
    <div
      css={css`
        position: fixed;
        top: 50%;
      `}
    >
      <PrevPageButton />
    </div>
  </div>
);
