/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import { ImageComponent } from "./ImageComponent";
import { ImageGroupComponentFragment } from "./generated/graphql";
import React from "react";

export interface ImageGroupComponentProps {
  fragment: ImageGroupComponentFragment;
}

export const ImageGroupComponent = ({
  fragment,
}: ImageGroupComponentProps): JSX.Element => {
  const groupFragment = fragment;

  if (!groupFragment.images) {
    return <React.Fragment />;
  } else if (groupFragment.images.length == 1 && groupFragment.images[0]) {
    return <ImageComponent fragment={groupFragment.images[0]} />;
  } else {
    return <div></div>;
  }
};

ImageGroupComponent.fragments = gql`
fragment ImageGroupComponent on ImageGroup {
  images {
    ...ImageComponent
  }
  ${ImageComponent.fragments}
}
`;
