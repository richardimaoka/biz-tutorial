/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageComponent } from "./PageComponent";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useGetPageQuery } from "./generated/graphql";

const GET_PAGE = gql`
  query GetPage($currentPageId: String!) {
    tutorial(currentPageId: $currentPageId) {
      currentPage {
        ...PageComponent
      }
    }
  }

  ${PageComponent.fragments}
`;

const InnerComponent = ({ pageId }: { pageId: string }) => {
  const { loading, error, data } = useGetPageQuery({
    variables: { currentPageId: pageId },
  });

  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  } else if (!data) {
    return <div>{`Error! returned data is undefined or null`}</div>;
  } else if (!data.tutorial) {
    return <div>{`Error! returned data.tutorial is undefined or null`}</div>;
  } else {
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
            {data.tutorial.currentPage ? (
              <PageComponent fragment={data.tutorial.currentPage} />
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    );
  }
};

export const MainContainer = (): JSX.Element => {
  const params = useParams<"pageId">();
  return params.pageId ? (
    <InnerComponent pageId={params.pageId} />
  ) : (
    <div>invalid page id</div>
  );
};
