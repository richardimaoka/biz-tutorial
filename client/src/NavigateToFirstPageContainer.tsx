import { gql } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetFirstPageIdQuery } from "./generated/graphql";

//This is read by GraphQL codegen to generate types
gql`
  query GetFirstPageId {
    tutorial(id: "") {
      firstPageId
    }
  }
`;

const InnerNavigate = ({ firstPageId }: { firstPageId: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/" + firstPageId);
  });

  return <></>;
};

export const NavigateToFirstPageContainer = (): JSX.Element => {
  const { loading, error, data } = useGetFirstPageIdQuery();

  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  } else if (!data) {
    return <div>{`Error! returned data is undefined or null`}</div>;
  } else if (!data.tutorial) {
    return <div>{`Error! returned data.tutorial is undefined or null`}</div>;
  } else {
    return data.tutorial.firstPageId ? (
      <InnerNavigate firstPageId={data.tutorial.firstPageId} />
    ) : (
      <></>
    );
  }
};
