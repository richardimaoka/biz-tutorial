/** @jsxImportSource @emotion/react */
import { PageTitle } from "./PageTitleComponent";
import { gql } from "@apollo/client";
import { PageComponentFragment } from "./generated/graphql";
import React from "react";
import { VideoComponent } from "./VideoComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { ImageGroupComponent } from "./ImageGroupComponent";
import { FoldableComponent } from "./FoldableComponent";
import { switchExhaustivenessCheck } from "./switchExhaustivenessCheck";

export interface PageComponentProps {
  fragment: PageComponentFragment;
}

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
                return <FoldableComponent fragment={element} />;
              case "Output":
                return <React.Fragment />;
              case "Paragraph":
                return <ParagraphComponent fragment={element} />;
              case "ImageGroup":
                return <ImageGroupComponent fragment={element} />;
              default:
                return switchExhaustivenessCheck(element.__typename);
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
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
    }
  }
  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
  ${FoldableComponent.fragments}
`;
