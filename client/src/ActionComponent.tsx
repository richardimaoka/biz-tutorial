/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ActionLabelComponent } from "./ActionLabelComponent";
import { Paragraph } from "./ParagraphComponent";
import { DecoratableTextChunkProps } from "./TextChunkComponent";

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
        <ActionLabelComponent />
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
