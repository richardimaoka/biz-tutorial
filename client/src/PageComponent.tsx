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
import { PageTransitionComponent } from "./PageTransitionComponent";
import { ProgressBar } from "./ProgressBar";
import { ActionComponent } from "./ActionComponent";
import { CommandComponent } from "./CommandComponent";
import { OutputComponent } from "./OutputComponent";

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
        {fragment.progress ? (
          <ProgressBar fragment={fragment.progress} />
        ) : (
          <React.Fragment />
        )}
        <PageTitle title={fragment.title} />
        {fragment.pageElements.map((element, index) => {
          if (!element || !element.__typename) {
            return <React.Fragment key={index} />;
          } else {
            switch (element.__typename) {
              case "Video":
                return <VideoComponent key={index} fragment={element} />;
              case "Command":
                return <CommandComponent key={index} fragment={element} />;
              case "Foldable":
                return <FoldableComponent key={index} fragment={element} />;
              case "Output":
                return <OutputComponent key={index} fragment={element} />;
              case "Paragraph":
                return <ParagraphComponent key={index} fragment={element} />;
              case "ImageGroup":
                return <ImageGroupComponent key={index} fragment={element} />;
              case "Action":
                return <ActionComponent key={index} fragment={element} />;
              default:
                return switchExhaustivenessCheck(element.__typename);
            }
          }
        })}
        <PageTransitionComponent fragment={fragment} />
      </div>
    );
  }
};

PageComponent.fragments = gql`
  fragment PageComponent on Page {
    title
    ...PageTransitionComponent
    progress {
      ...ProgressBar
    }
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
      ... on Action {
        ...ActionComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on Output {
        ...OutputComponent
      }
    }
  }
  ${PageTransitionComponent.fragments}
  ${VideoComponent.fragments}
  ${ParagraphComponent.fragments}
  ${ImageGroupComponent.fragments}
  ${FoldableComponent.fragments}
  ${ActionComponent.fragments}
  ${CommandComponent.fragments}
  ${OutputComponent.fragments}
`;
