/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { VideoComponent } from "./VideoComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { ImageGroupComponent } from "./ImageGroupComponent";
import { FoldableComponentFragment } from "./generated/graphql";
import React from "react";

export interface FoldableComponentProps {
  fragment: FoldableComponentFragment;
}

export const FoldableComponent = ({
  fragment,
}: FoldableComponentProps): JSX.Element => {
  return fragment.shortDescription ? (
    <div
      css={css`
        background-color: #aed5f3;
      `}
    >
      {fragment.shortDescription}
    </div>
  ) : (
    <React.Fragment />
  );
};

FoldableComponent.fragments = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
    }
  }

  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
`;
