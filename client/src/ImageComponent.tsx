/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { ImageComponentFragment } from "./generated/graphql";
import React from "react";

export interface ImageComponentProps {
  fragment: ImageComponentFragment;
}

export const ImageComponent = ({
  fragment,
}: ImageComponentProps): JSX.Element => {
  return fragment.url ? (
    <div>
      <div
        css={css`
          padding: 4px;
          display: flex;
          justify-content: center;
        `}
      >
        <img src={fragment.url} alt="" />;
      </div>
      {fragment.caption ? <div>{fragment.caption}</div> : <React.Fragment />}
    </div>
  ) : (
    <React.Fragment />
  );
};

ImageComponent.fragments = gql`
  fragment ImageComponent on Image {
    url
    caption
  }
`;
