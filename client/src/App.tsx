/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer } from "./MainContainer";
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

const query = gql`
  query {
    tutorial {
      title
      pages {
        title
        elements {
          ... on Paragraph {
            body
          }
        }
      }
    }
  }
`;

const Internal = (): JSX.Element => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <div>{"Loading..."}</div>;
  } else if (error) {
    return <div>{`Error! ${error.message}`}</div>;
  } else {
    return (
      <React.Fragment>
        <HeaderContainer title={data.tutorial.title}></HeaderContainer>
        <MainContainer></MainContainer>
      </React.Fragment>
    );
  }
};

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Internal />
  </ApolloProvider>
);

export default App;
