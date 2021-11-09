/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextChunkComponent, TextChunkProps } from "./TextChunkComponent";
import { gql } from "@apollo/client";
import { ParagraphComponentFragment } from "./generated/graphql";
import React from "react";

interface ParagraphProps {
  fragment: ParagraphComponentFragment;
}

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks) {
    return <React.Fragment />;
  } else {
    return (
      <div
        css={css`
          padding: 8px;
        `}
      >
        <p
          css={css`
            color: #0a0a0a;
            margin: 0px;
          `}
          contentEditable={false}
        >
          {fragment.chunks.map((chunk, index) =>
            chunk ? (
              <TextChunkComponent key={index} fragment={chunk} />
            ) : (
              <React.Fragment />
            )
          )}
        </p>
      </div>
    );
  }
};

ParagraphComponent.fragments = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragments}
`;
