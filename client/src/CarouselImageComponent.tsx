/** @jsxImportSource @emotion/react */
import { gql } from "@apollo/client";
import React from "react";
import { CarouselImageFragment } from "./generated/graphql";

interface CarouselImageProps {
  fragment: CarouselImageFragment;
}

export const CarouselImage = ({ fragment }: CarouselImageProps): JSX.Element =>
  fragment.url ? <img src={fragment.url} alt="" /> : <React.Fragment />;

CarouselImage.fragments = gql`
  fragment CarouselImage on Image {
    url
  }
`;
