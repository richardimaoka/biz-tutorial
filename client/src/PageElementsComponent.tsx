import { PageTitle } from "./PageTitleComponent";
import { VideoComponent } from "./VideoComponent";
import { gql } from "@apollo/client";
import { PageElementsComponentFragment } from "./generated/graphql";
import React from "react";

export interface PageElementsComponentProps {
  fragment: PageElementsComponentFragment;
}

export const PageElementsComponent = ({
  fragment,
}: PageElementsComponentProps) => {
  if (!fragment.pageElements) {
    return <React.Fragment />;
  } else {
    fragment.pageElements.map((element, index) => {
      if (!element || !element.__typename) {
        return <React.Fragment key={index} />;
      } else {
        switch (element.__typename) {
          case "Video":
            return <React.Fragment />;
          case "Command":
            return <React.Fragment />;
          case "Foldable":
            return <React.Fragment />;
          case "Output":
            return <React.Fragment />;
          case "Paragraph":
            return <React.Fragment />;
          default:
            const _exhaustiveCheck: never = element.__typename;
            return _exhaustiveCheck;
        }
      }
    });
  }
};

PageElementsComponent.fragments = gql`
  fragment PageElementsComponent on Page {
    pageElements {
      ... on Video {
        ...VideoComponent
      }
    }
  }
  ${VideoComponent.fragments}
`;
