/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CarouselItem } from "./CarouselItem";

interface Item {
  id: string;
  src: string;
}

interface CarouselContentProps {
  items: Item[];
}

export const CarouselContent = ({ items }: CarouselContentProps) => (
  <div
    css={css`
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    `}
  >
    {items.map((item) => (
      <CarouselItem key={item.id} src={item.src} />
    ))}
  </div>
);
