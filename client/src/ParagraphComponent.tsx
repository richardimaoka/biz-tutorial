/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  DecoratableTextChunk,
  DecoratableTextChunkProps,
} from "./TextChunkComponent";
interface ParagraphProps {
  chunks: DecoratableTextChunkProps[];
}

export const Paragraph = ({ chunks }: ParagraphProps): JSX.Element => {
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
        contentEditable={true}
      >
        {chunks.map((chunk, index) => (
          <DecoratableTextChunk
            key={index}
            text={chunk.text}
            highlight={chunk.highlight}
            bold={chunk.bold}
            hyperlinkUrl={chunk.hyperlinkUrl}
            strikeout={chunk.strikeout}
          />
        ))}
      </p>
    </div>
  );
};
