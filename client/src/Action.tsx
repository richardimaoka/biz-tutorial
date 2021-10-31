/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ActionLabel } from "./ActionLabel";
import { Paragraph } from "./Paragraph";
import { DecoratableTextChunkProps } from "./DecoratableTextChunk";

interface ActionProps {
  chunks: DecoratableTextChunkProps[];
}

export const Action = ({ chunks }: ActionProps): JSX.Element => {
  return (
    <div>
      <div
        css={css`
          display: flex;
        `}
      >
        <ActionLabel />
      </div>
      <div
        css={css`
          border: solid 1px #eecf33;
        `}
      >
        <Paragraph chunks={chunks} />
      </div>
    </div>
  );
};
