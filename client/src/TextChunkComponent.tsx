/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface DecoratableTextChunkProps {
  text: string;
  highlight: boolean | null;
  bold: boolean | null;
  hyperlinkUrl: string | null;
  strikeout: boolean | null;
}

export const DecoratableTextChunk = ({
  text,
  highlight,
  bold,
  hyperlinkUrl,
  strikeout,
}: DecoratableTextChunkProps): JSX.Element => {
  const cssProperties = css`
    background-color: ${highlight ? "#E6FF01" : "transparent"};
    font-weight: ${bold ? "bold" : "normal"};
    text-decoration: ${strikeout ? "line-through" : "no"};
  `;

  if (hyperlinkUrl) {
    return (
      <span css={cssProperties}>
        <a href={hyperlinkUrl}>{text}</a>
      </span>
    );
  } else {
    return <span css={cssProperties}>{text}</span>;
  }
};
