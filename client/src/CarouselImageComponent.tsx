/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface CarouselImageProps {
  src: string;
  fit: "fit2width" | "fit2height" | "originalsize";
}

export const CarouselImage = ({ src }: CarouselImageProps) => (
  <img src={src} alt="" />
);
