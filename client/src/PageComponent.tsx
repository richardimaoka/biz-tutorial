/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitleComponent";
import { gql } from "@apollo/client";
import { PageComponentFragment } from "./generated/graphql";

export interface PageComponentProps {
  fragment: PageComponentFragment;
}

export const PageComponent = ({
  fragment,
}: PageComponentProps): JSX.Element => {
  return (
    <div>{fragment.title ? <PageTitle title={fragment.title} /> : <div />}</div>
  );
};

PageComponent.fragments = gql`
  fragment PageComponent on Page {
    title
  }
`;
