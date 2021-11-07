/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const HeaderTitleComponent = ({ title }: { title: string }) => (
  <h1
    css={css`
      margin: 0px;
      font-size: 1.5em;
    `}
  >
    {title}
  </h1>
);
