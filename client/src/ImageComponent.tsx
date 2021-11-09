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
  if (!fragment.url) {
    return <React.Fragment />;
  } else {
    return (
      <div
        css={css`
          padding: 4px;
          display: flex;
          justify-content: center;
        `}
      >
        <img src={fragment.url} alt="" />;
      </div>
    );
  }
};

ImageComponent.fragments = gql`
  fragment ImageComponent on Image {
    url
  }
`;
