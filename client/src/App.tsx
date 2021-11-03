/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer } from "./MainContainer";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <HeaderContainer title="CypressをWSL2上で動かすために必要な作業"></HeaderContainer>
    <MainContainer></MainContainer>
  </ApolloProvider>
);

export default App;
