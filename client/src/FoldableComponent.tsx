/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { VideoComponent } from "./VideoComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { ImageGroupComponent } from "./ImageGroupComponent";
import { FoldableComponentFragment } from "./generated/graphql";
import React, { useState } from "react";
import { FoldedIcon } from "./FoldedIcon";
import { UnfoldedIcon } from "./UnFoldedIcon";
import { switchExhaustivenessCheck } from "./switchExhaustivenessCheck";

export interface FoldableComponentProps {
  fragment: FoldableComponentFragment;
}

export const FoldableComponent = ({
  fragment,
}: FoldableComponentProps): JSX.Element => {
  const [folded, setFolded] = useState(true);

  const unfold = () => {
    setFolded(false);
  };
  const fold = () => {
    setFolded(true);
  };

  return fragment.shortDescription ? (
    <div>
      <div
        css={css`
          background-color: #aed5f3;
          display: flex;
        `}
      >
        {folded ? (
          <div onClick={unfold}>
            <FoldedIcon />
          </div>
        ) : (
          <div onClick={fold}>
            <UnfoldedIcon />
          </div>
        )}
        {fragment.shortDescription}
      </div>
      {folded ? (
        <React.Fragment />
      ) : (
        <div
          css={css`
            border: solid 1px #aed5f3;
            padding: 8px;
          `}
        >
          {fragment.elements ? (
            fragment.elements.map((element, index) => {
              if (element && element.__typename) {
                switch (element.__typename) {
                  case "Video":
                    return <VideoComponent key={index} fragment={element} />;
                  case "Command":
                    return <React.Fragment key={index} />;
                  case "Output":
                    return <React.Fragment key={index} />;
                  case "Paragraph":
                    console.log(element);
                    return (
                      <ParagraphComponent key={index} fragment={element} />
                    );
                  case "ImageGroup":
                    return (
                      <ImageGroupComponent key={index} fragment={element} />
                    );
                  default:
                    return switchExhaustivenessCheck(element.__typename);
                }
              } else <React.Fragment key={index} />;
            })
          ) : (
            <React.Fragment />
          )}
        </div>
      )}
    </div>
  ) : (
    <React.Fragment />
  );
};

FoldableComponent.fragments = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
    }
  }

  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
`;
