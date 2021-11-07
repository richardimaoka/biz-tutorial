/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer, MainProps } from "./MainContainer";
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const TOP_LEVEL_QUERY = gql`
  query TspLevdelQuery {
    tutorial {
      ...HeaderContainer
      ...MainContainer
    }
  }

  ${HeaderContainer.fragments}
  ${MainContainer.fragments}
`;

const InternalComponent = (): JSX.Element => {
  const { loading, error, data } = useQuery(TOP_LEVEL_QUERY);

  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  } else if (!data) {
    return <div>{`Error! returned data is undefined or null`}</div>;
  } else if (!data.tutorial) {
    return <div>{`Error! returned data.tutorial is undefined or null`}</div>;
  } else {
    console.log(data);
    return (
      <React.Fragment>
        <HeaderContainer header={data.tutorial}></HeaderContainer>
        <MainContainer main={data.tutorial}></MainContainer>
      </React.Fragment>
    );
  }
};

const AppComponent = (): JSX.Element => (
  <ApolloProvider client={client}>
    <InternalComponent />
  </ApolloProvider>
);

export default AppComponent;
