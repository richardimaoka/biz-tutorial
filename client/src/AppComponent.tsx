/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer, MainProps } from "./MainContainer";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import React from "react";
import { useToplevelQuery } from "./generated/graphql";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const InternalComponent = (): JSX.Element => {
  const { loading, error, data } = useToplevelQuery();

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
      <React.Fragment>
        <HeaderContainer title={data.tutorial.title}></HeaderContainer>
        <MainContainer
          progress={data.tutorial.progress}
          currentPage={data.tutorial.currentPage}
        ></MainContainer>
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
