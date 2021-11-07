/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "./PageTitle";

export interface PageProps {
  title: string | null;
}

export const Page = ({ title }: PageProps): JSX.Element => {
  return title ? <PageTitle title={title} /> : <div />;
};
