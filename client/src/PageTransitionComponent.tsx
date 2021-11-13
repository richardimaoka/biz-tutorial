/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { PageTransitionComponentFragment } from "./generated/graphql";
import React from "react";
import { NextPageButton } from "./NextPageButton";
import { PrevPageButton } from "./PrevPageButton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export interface PageTransitionComponentProps {
  fragment: PageTransitionComponentFragment;
}

export const PageTransitionComponent = ({
  fragment,
}: PageTransitionComponentProps) => {
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
    <React.Fragment />
  );
};

PageTransitionComponent.fragments = gql`
  fragment PageTransitionComponent on Page {
    nextPageId
    prevPageId
  }
`;
