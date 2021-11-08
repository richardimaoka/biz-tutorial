/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitleComponent";
import { gql } from "@apollo/client";
import { PageComponentFragment } from "./generated/graphql";
import React from "react";
import { VideoComponent } from "./VideoComponent";
import { TextChunkComponent } from "./TextChunkComponent";

export interface PageComponentProps {
  fragment: PageComponentFragment;
}

const exhaustivenessCheck = (v: never) => {
  return v;
};

export const PageComponent = ({
  fragment,
}: PageComponentProps): JSX.Element => {
  if (!fragment.title || !fragment.pageElements) {
    return <React.Fragment />;
  } else {
    return (
      <div>
        <PageTitle title={fragment.title} />
        {fragment.pageElements.map((element, index) => {
          if (!element || !element.__typename) {
            return <React.Fragment key={index} />;
          } else {
            switch (element.__typename) {
              case "Video":
                return <VideoComponent fragment={element} />;
              case "Command":
                return <React.Fragment />;
              case "Foldable":
                return <React.Fragment />;
              case "Output":
                return <React.Fragment />;
              case "Paragraph":
                return <React.Fragment />;
              default:
                return exhaustivenessCheck(element.__typename);
            }
          }
        })}
      </div>
    );
  }
};

PageComponent.fragments = gql`
  fragment PageComponent on Page {
    title
    pageElements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        chunks {
          ...TextChunkComponent
        }
      }
    }
  }
  ${VideoComponent.fragments}
  ${TextChunkComponent.fragments}
`;
