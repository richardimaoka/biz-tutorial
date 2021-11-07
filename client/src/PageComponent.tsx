/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitleComponent";
import { gql } from "@apollo/client";
import { PageComponentFragment } from "./generated/graphql";

export interface PageComponentProps {
  page: PageComponentFragment;
}

export const PageComponent = ({ page }: PageComponentProps): JSX.Element => {
  return <div>{page.title ? <PageTitle title={page.title} /> : <div />}</div>;
};

PageComponent.fragments = gql`
  fragment PageComponent on Page {
    title
  }
`;
