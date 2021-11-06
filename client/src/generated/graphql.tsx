import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Command = {
  __typename?: "Command";
  command: Maybe<Scalars["String"]>;
};

export type CommandAndOutput = {
  __typename?: "CommandAndOutput";
  command: Maybe<Scalars["String"]>;
  output: Maybe<Scalars["String"]>;
};

export type DirectoryStructure = {
  __typename?: "DirectoryStructure";
  contents: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Foldable = {
  __typename?: "Foldable";
  elements: Maybe<Array<Maybe<PlainElement>>>;
  shortDescription: Maybe<Scalars["String"]>;
};

export type Note = {
  __typename?: "Note";
  body: Maybe<Scalars["String"]>;
};

export type Output = {
  __typename?: "Output";
  body: Maybe<Scalars["String"]>;
};

export type Page = {
  __typename?: "Page";
  elements: Maybe<Array<Maybe<PageElement>>>;
  title: Maybe<Scalars["String"]>;
};

export type PageElement = Command | Foldable | Output | Paragraph;

export type Paragraph = {
  __typename?: "Paragraph";
  body: Maybe<Scalars["String"]>;
};

export type PlainElement = Command | Output | Paragraph;

export type Query = {
  __typename?: "Query";
  tutorial: Maybe<Tutorial>;
};

export type QueryTutorialArgs = {
  name: Maybe<Scalars["String"]>;
  owner: Maybe<Scalars["String"]>;
};

export type Tutorial = {
  __typename?: "Tutorial";
  pages: Maybe<Array<Maybe<Page>>>;
  title: Maybe<Scalars["String"]>;
};

export type ToplevelQueryVariables = Exact<{ [key: string]: never }>;

export type ToplevelQuery = {
  __typename?: "Query";
  tutorial: {
    __typename?: "Tutorial";
    title: string | null;
    pages: Array<{
      __typename?: "Page";
      title: string | null;
      elements: Array<
        | { __typename?: "Command" }
        | { __typename?: "Foldable" }
        | { __typename?: "Output" }
        | { __typename?: "Paragraph"; body: string | null }
        | null
      > | null;
    } | null> | null;
  } | null;
};

export const ToplevelDocument = gql`
  query toplevel {
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

/**
 * __useToplevelQuery__
 *
 * To run a query within a React component, call `useToplevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useToplevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToplevelQuery({
 *   variables: {
 *   },
 * });
 */
export function useToplevelQuery(
  baseOptions?: Apollo.QueryHookOptions<ToplevelQuery, ToplevelQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ToplevelQuery, ToplevelQueryVariables>(
    ToplevelDocument,
    options
  );
}
export function useToplevelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ToplevelQuery,
    ToplevelQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ToplevelQuery, ToplevelQueryVariables>(
    ToplevelDocument,
    options
  );
}
export type ToplevelQueryHookResult = ReturnType<typeof useToplevelQuery>;
export type ToplevelLazyQueryHookResult = ReturnType<
  typeof useToplevelLazyQuery
>;
export type ToplevelQueryResult = Apollo.QueryResult<
  ToplevelQuery,
  ToplevelQueryVariables
>;
