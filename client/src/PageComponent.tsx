/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitle";

export interface PageComponentProps {
  title: string | null;
}

export const PageComponent = ({ title }: PageComponentProps): JSX.Element => {
  return <div>{title ? <PageTitle title={title} /> : <div />}</div>;
};
