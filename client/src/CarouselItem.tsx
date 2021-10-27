/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CarouselImage } from "./CarouselImage";

interface CarouselItemProps {
  src: string;
}

export const CarouselItem = ({ src }: CarouselItemProps) => (
  <div
    css={css`
      flex-shrink: 0;
      scroll-snap-align: start;
      background-color: black;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        width: 640px;
        height: 360px;
        align-items: center;
      `}
    >
      <CarouselImage src={src} fit={"originalsize"} />
    </div>
  </div>
);
