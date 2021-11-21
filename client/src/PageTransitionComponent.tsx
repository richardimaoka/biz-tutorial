/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PageTransitionComponentFragment } from "./generated/graphql";
import { NextPageButton } from "./NextPageButton";
import { PrevPageButton } from "./PrevPageButton";

export interface PageTransitionComponentProps {
  fragment: PageTransitionComponentFragment;
}

export const PageTransitionComponent = ({
  fragment,
}: PageTransitionComponentProps): JSX.Element => {
  return fragment.prevPageId || fragment.nextPageId ? (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {fragment.prevPageId ? (
        <Link to={"/" + fragment.prevPageId}>
          <PrevPageButton />
        </Link>
      ) : (
        <div />
      )}
      {fragment.nextPageId ? (
        <Link to={"/" + fragment.nextPageId}>
          <NextPageButton />
        </Link>
      ) : (
        <div />
      )}
    </div>
  ) : (
    <></>
  );
};

PageTransitionComponent.fragments = gql`
  fragment PageTransitionComponent on Page {
    nextPageId
    prevPageId
  }
`;
