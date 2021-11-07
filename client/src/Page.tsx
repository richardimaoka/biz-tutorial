/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface PageProps {
  title: string | null;
}

export const Page = ({ title }: PageProps): JSX.Element => {
  return <div>{title}</div>;
};
