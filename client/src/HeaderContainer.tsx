/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { HeaderTitle } from "./HeaderTitle";
import { HeaderIcon } from "./HeaderIcon";

export const HeaderContainer = ({ title }: { title: string | null }) => (
  <header>
    <div
      css={css`
        display: flex;
        padding: 8px;
        border-bottom: solid 1px #707070;
      `}
    >
      <HeaderIcon />
      {title ? <HeaderTitle title={title} /> : <HeaderTitle title="" />}
    </div>
  </header>
);
