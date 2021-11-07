/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { HeaderTitleComponent } from "./HeaderTitleComponent";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderContainerFragment } from "./generated/graphql";

export interface HeaderContainerProps {
  fragment: HeaderContainerFragment;
}

export const HeaderContainer = ({ fragment }: HeaderContainerProps) => (
  <header>
    <div
      css={css`
        display: flex;
        padding: 8px;
        border-bottom: solid 1px #707070;
      `}
    >
      <HeaderIcon />
      {fragment.title ? (
        <HeaderTitleComponent title={fragment.title} />
      ) : (
        <HeaderTitleComponent title="" />
      )}
    </div>
  </header>
);

HeaderContainer.fragments = gql`
  fragment HeaderContainer on Tutorial {
    title
  }
`;
