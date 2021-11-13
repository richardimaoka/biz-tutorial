/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { PageTransitionComponentFragment } from "./generated/graphql";
import React from "react";
import { NextPageButton } from "./NextPageButton";
import { PrevPageButton } from "./PrevPageButton";
import { useParams } from "react-router";

export interface PageTransitionComponentProps {
  fragment: PageTransitionComponentFragment;
}

const toInt = (str: string | undefined): number | null => {
  if (!str) {
    return null;
  } else {
    //This regex needs to be more strict... it allows unwanted values like '-10', '16F'
    const matchResult = str.match(/\d+/);
    const isInt = matchResult && matchResult.length > 0;
    return isInt ? parseInt(str) : null;
  }
};

export const PageTransitionComponent = ({
  fragment,
}: PageTransitionComponentProps) => {
  const params = useParams<"pageNo">();
  console.log(params);
  const pageNo = params.pageNo ? params.pageNo.match(/\d+/)?.length : null;
  const canRender = pageNo && fragment.currentPageId && fragment.numPages;

  return canRender ? (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <PrevPageButton />
      {pageNo + 1}
      {fragment.nextPageNum ? (
        <NextPageButton nextPage={fragment.nextPageNum} />
      ) : (
        <React.Fragment />
      )}
    </div>
  ) : (
    <React.Fragment />
  );
};

PageTransitionComponent.fragments = gql`
  fragment PageTransitionComponent on Progress {
    numPages
    currentPageId
    nextPageId
    prevPageId
  }
`;
