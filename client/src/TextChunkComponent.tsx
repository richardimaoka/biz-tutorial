/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { TextChunkComponentFragment } from "./generated/graphql";

export interface TextChunkProps {
  fragment: TextChunkComponentFragment;
}

export const TextChunkComponent = ({
  fragment,
}: TextChunkProps): JSX.Element => {
  const cssProperties = css`
    background-color: ${fragment.highlight ? "#E6FF01" : "transparent"};
    font-weight: ${fragment.bold ? "bold" : "normal"};
    text-decoration: ${fragment.strikeout ? "line-through" : "no"};
  `;

  if (fragment.hyperlinkUrl) {
    return (
      <span css={cssProperties}>
        <a href={fragment.hyperlinkUrl}>{fragment.text}</a>
      </span>
    );
  } else {
    return <span css={cssProperties}>{fragment.text}</span>;
  }
};

TextChunkComponent.fragments = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
  }
`;
