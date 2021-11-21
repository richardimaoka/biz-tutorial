/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useGetTutorialQuery } from "./generated/graphql";
import { HeaderContainer } from "./HeaderContainer";
import { MainContainer } from "./MainContainer";
import { NavigateToFirstPageContainer } from "./NavigateToFirstPageContainer";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

//This is read by GraphQL codegen to generate types
gql`
  query GetTutorial {
    tutorial (id: "wsl"){
      ...HeaderContainer
    }
    ${HeaderContainer.fragments}
  }
`;

const TutorialComponent = (): JSX.Element => {
  const { loading, error, data } = useGetTutorialQuery();

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
      <>
        <HeaderContainer fragment={data.tutorial}></HeaderContainer>
        <Outlet />
      </>
    );
  }
};

const AppComponent = (): JSX.Element => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TutorialComponent />}>
          <Route index element={<NavigateToFirstPageContainer />} />
          <Route path=":pageNum" element={<MainContainer />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default AppComponent;
