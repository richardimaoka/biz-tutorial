/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitleComponent";
import { gql } from "@apollo/client";
import { PageComponentFragment } from "./generated/graphql";
import { TextChunkComponent } from "./TextChunkComponent";
import React from "react";
import { ParagraphComponent } from "./ParagraphComponent";

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
          if (element) {
            switch (element.__typename) {
              case "Paragraph": {
                return <ParagraphComponent key={index} fragment={element} />;
              }
              default: {
                return <React.Fragment key={index} />;
              }
            }
          } else {
            return <React.Fragment key={index} />;
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
      ... on Paragraph {
        chunks {
          ...TextChunkComponent
        }
      }
    }
  }

  ${TextChunkComponent.fragments}
`;
