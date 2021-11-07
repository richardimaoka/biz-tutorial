/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";
import { PageComponent, PageComponentProps } from "./PageComponent";
import { MainContainerFragment } from "./generated/graphql";
import { gql } from "@apollo/client";

export interface MainProps {
  fragment: MainContainerFragment;
}

export const MainContainer = ({ fragment }: MainProps) => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 768px;
            border: solid 1px #f9f9f9;
          `}
        >
          {fragment.progress ? (
            <ProgressBar fragment={fragment.progress} />
          ) : (
            <div />
          )}
          {fragment.currentPage ? (
            <PageComponent fragment={fragment.currentPage} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
};

MainContainer.fragments = gql`
  fragment MainContainer on Tutorial {
    progress {
      ...ProgressBar
    }
    currentPage {
      ...PageComponent
    }
  }

  ${ProgressBar.fragments}
  ${PageComponent.fragments}
`;
