/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { PageTransitionComponentFragment } from "./generated/graphql";
import React from "react";
import { NextPageButton } from "./NextPageButton";
import { PrevPageButton } from "./PrevPageButton";

export interface PageTransitionComponentProps {
  fragment: PageTransitionComponentFragment;
}

export const PageTransitionComponent = ({
  fragment,
}: PageTransitionComponentProps) => {
  return fragment.currentPageNum && fragment.numPages ? (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <PrevPageButton />
      <NextPageButton />
    </div>
  ) : (
    <React.Fragment />
  );
};

PageTransitionComponent.fragments = gql`
  fragment PageTransitionComponent on Progress {
    numPages
    currentPageNum
  }
`;
