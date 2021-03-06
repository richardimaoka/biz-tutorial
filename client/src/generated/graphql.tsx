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

export type Action = {
  __typename?: "Action";
  paragraph: Maybe<Paragraph>;
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

export type DecorateTextChunksInput = {
  __typename?: "DecorateTextChunksInput";
  chunks: Array<Maybe<TextChunkWithOperation>>;
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

export type Image = {
  __typename?: "Image";
  caption: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
};

export type ImageGroup = {
  __typename?: "ImageGroup";
  images: Maybe<Array<Maybe<Image>>>;
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
  id: Maybe<Scalars["ID"]>;
  nextPageNum: Maybe<Scalars["String"]>;
  pageElements: Maybe<Array<Maybe<PageElement>>>;
  pageNum: Maybe<Scalars["String"]>;
  prevPageNum: Maybe<Scalars["String"]>;
  progress: Maybe<Progress>;
  title: Maybe<Scalars["String"]>;
};

export type PageElement =
  | Action
  | Command
  | Foldable
  | Image
  | ImageGroup
  | Output
  | Paragraph
  | Video;

export type Paragraph = {
  __typename?: "Paragraph";
  chunks: Maybe<Array<Maybe<TextChunk>>>;
};

export type PlainElement =
  | Action
  | Command
  | Image
  | ImageGroup
  | Output
  | Paragraph
  | Video;

export type Progress = {
  __typename?: "Progress";
  currentPageNum: Maybe<Scalars["Int"]>;
  numPages: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  tutorial: Maybe<Tutorial>;
};

export type QueryTutorialArgs = {
  currentPageNum: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type TextChunk = {
  __typename?: "TextChunk";
  bold: Maybe<Scalars["Boolean"]>;
  highlight: Maybe<Scalars["Boolean"]>;
  hyperlinkUrl: Maybe<Scalars["String"]>;
  inlineCode: Maybe<Scalars["Boolean"]>;
  strikeout: Maybe<Scalars["Boolean"]>;
  text: Maybe<Scalars["String"]>;
};

export type TextChunkModifyOperation = {
  __typename?: "TextChunkModifyOperation";
  bold: Maybe<Scalars["Boolean"]>;
  highlight: Maybe<Scalars["Boolean"]>;
  hyperlinkUrl: Maybe<Scalars["String"]>;
  strikeout: Maybe<Scalars["Boolean"]>;
  text: Maybe<Scalars["String"]>;
};

export type TextChunkOperation =
  | TextChunkModifyOperation
  | TextChunkSplitOperation;

export type TextChunkSplitOperation = {
  __typename?: "TextChunkSplitOperation";
  splitAt: Scalars["Int"];
  splitFirstHalfOperation: Maybe<TextChunkModifyOperation>;
  splitSecondHalfOperation: Maybe<TextChunkModifyOperation>;
};

export type TextChunkWithOperation = {
  __typename?: "TextChunkWithOperation";
  chunk: TextChunk;
  operation: Maybe<TextChunkOperation>;
};

export type Tutorial = {
  __typename?: "Tutorial";
  currentPage: Maybe<Page>;
  id: Maybe<Scalars["ID"]>;
  pages: Maybe<Array<Maybe<Page>>>;
  title: Maybe<Scalars["String"]>;
  unusedParam: Maybe<Scalars["Int"]>;
};

export type Video = {
  __typename?: "Video";
  caption: Maybe<Scalars["String"]>;
  platform: Maybe<VideoPlatform>;
  url: Maybe<Scalars["String"]>;
};

export enum VideoPlatform {
  Vimeo = "VIMEO",
  Youtube = "YOUTUBE",
}

export type ActionComponentFragment = {
  __typename?: "Action";
  paragraph: {
    __typename?: "Paragraph";
    chunks: Array<{
      __typename?: "TextChunk";
      text: string | null;
      highlight: boolean | null;
      bold: boolean | null;
      hyperlinkUrl: string | null;
      strikeout: boolean | null;
      inlineCode: boolean | null;
    } | null> | null;
  } | null;
};

export type CarouselComponentFragment = {
  __typename?: "ImageGroup";
  images: Array<{ __typename?: "Image"; url: string | null } | null> | null;
};

export type CarouselContentFragment = {
  __typename?: "ImageGroup";
  images: Array<{ __typename?: "Image"; url: string | null } | null> | null;
};

export type CarouselImageFragment = {
  __typename?: "Image";
  url: string | null;
};

export type CarouselItemFragment = { __typename?: "Image"; url: string | null };

export type CommandComponentFragment = {
  __typename?: "Command";
  command: string | null;
};

export type FoldableComponentFragment = {
  __typename?: "Foldable";
  shortDescription: string | null;
  elements: Array<
    | {
        __typename?: "Action";
        paragraph: {
          __typename?: "Paragraph";
          chunks: Array<{
            __typename?: "TextChunk";
            text: string | null;
            highlight: boolean | null;
            bold: boolean | null;
            hyperlinkUrl: string | null;
            strikeout: boolean | null;
            inlineCode: boolean | null;
          } | null> | null;
        } | null;
      }
    | { __typename?: "Command" }
    | { __typename?: "Image"; url: string | null; caption: string | null }
    | {
        __typename?: "ImageGroup";
        images: Array<{
          __typename?: "Image";
          url: string | null;
          caption: string | null;
        } | null> | null;
      }
    | { __typename?: "Output" }
    | {
        __typename?: "Paragraph";
        chunks: Array<{
          __typename?: "TextChunk";
          text: string | null;
          highlight: boolean | null;
          bold: boolean | null;
          hyperlinkUrl: string | null;
          strikeout: boolean | null;
          inlineCode: boolean | null;
        } | null> | null;
      }
    | {
        __typename?: "Video";
        platform: VideoPlatform | null;
        url: string | null;
        caption: string | null;
      }
    | null
  > | null;
};

export type HeaderContainerFragment = {
  __typename?: "Tutorial";
  title: string | null;
};

export type ImageComponentFragment = {
  __typename?: "Image";
  url: string | null;
  caption: string | null;
};

export type ImageGroupComponentFragment = {
  __typename?: "ImageGroup";
  images: Array<{
    __typename?: "Image";
    url: string | null;
    caption: string | null;
  } | null> | null;
};

export type GetPageQueryVariables = Exact<{
  tutorialId: Scalars["String"];
  currentPageNum: Scalars["String"];
}>;

export type GetPageQuery = {
  __typename?: "Query";
  tutorial: {
    __typename?: "Tutorial";
    currentPage: {
      __typename?: "Page";
      title: string | null;
      nextPageNum: string | null;
      prevPageNum: string | null;
      progress: {
        __typename?: "Progress";
        currentPageNum: number | null;
        numPages: number | null;
      } | null;
      pageElements: Array<
        | {
            __typename?: "Action";
            paragraph: {
              __typename?: "Paragraph";
              chunks: Array<{
                __typename?: "TextChunk";
                text: string | null;
                highlight: boolean | null;
                bold: boolean | null;
                hyperlinkUrl: string | null;
                strikeout: boolean | null;
                inlineCode: boolean | null;
              } | null> | null;
            } | null;
          }
        | { __typename?: "Command"; command: string | null }
        | {
            __typename?: "Foldable";
            shortDescription: string | null;
            elements: Array<
              | {
                  __typename?: "Action";
                  paragraph: {
                    __typename?: "Paragraph";
                    chunks: Array<{
                      __typename?: "TextChunk";
                      text: string | null;
                      highlight: boolean | null;
                      bold: boolean | null;
                      hyperlinkUrl: string | null;
                      strikeout: boolean | null;
                      inlineCode: boolean | null;
                    } | null> | null;
                  } | null;
                }
              | { __typename?: "Command" }
              | {
                  __typename?: "Image";
                  url: string | null;
                  caption: string | null;
                }
              | {
                  __typename?: "ImageGroup";
                  images: Array<{
                    __typename?: "Image";
                    url: string | null;
                    caption: string | null;
                  } | null> | null;
                }
              | { __typename?: "Output" }
              | {
                  __typename?: "Paragraph";
                  chunks: Array<{
                    __typename?: "TextChunk";
                    text: string | null;
                    highlight: boolean | null;
                    bold: boolean | null;
                    hyperlinkUrl: string | null;
                    strikeout: boolean | null;
                    inlineCode: boolean | null;
                  } | null> | null;
                }
              | {
                  __typename?: "Video";
                  platform: VideoPlatform | null;
                  url: string | null;
                  caption: string | null;
                }
              | null
            > | null;
          }
        | { __typename?: "Image"; url: string | null; caption: string | null }
        | {
            __typename?: "ImageGroup";
            images: Array<{
              __typename?: "Image";
              url: string | null;
              caption: string | null;
            } | null> | null;
          }
        | { __typename?: "Output"; body: string | null }
        | {
            __typename?: "Paragraph";
            chunks: Array<{
              __typename?: "TextChunk";
              text: string | null;
              highlight: boolean | null;
              bold: boolean | null;
              hyperlinkUrl: string | null;
              strikeout: boolean | null;
              inlineCode: boolean | null;
            } | null> | null;
          }
        | {
            __typename?: "Video";
            platform: VideoPlatform | null;
            url: string | null;
            caption: string | null;
          }
        | null
      > | null;
    } | null;
  } | null;
};

export type OutputComponentFragment = {
  __typename?: "Output";
  body: string | null;
};

export type PageComponentFragment = {
  __typename?: "Page";
  title: string | null;
  nextPageNum: string | null;
  prevPageNum: string | null;
  progress: {
    __typename?: "Progress";
    currentPageNum: number | null;
    numPages: number | null;
  } | null;
  pageElements: Array<
    | {
        __typename?: "Action";
        paragraph: {
          __typename?: "Paragraph";
          chunks: Array<{
            __typename?: "TextChunk";
            text: string | null;
            highlight: boolean | null;
            bold: boolean | null;
            hyperlinkUrl: string | null;
            strikeout: boolean | null;
            inlineCode: boolean | null;
          } | null> | null;
        } | null;
      }
    | { __typename?: "Command"; command: string | null }
    | {
        __typename?: "Foldable";
        shortDescription: string | null;
        elements: Array<
          | {
              __typename?: "Action";
              paragraph: {
                __typename?: "Paragraph";
                chunks: Array<{
                  __typename?: "TextChunk";
                  text: string | null;
                  highlight: boolean | null;
                  bold: boolean | null;
                  hyperlinkUrl: string | null;
                  strikeout: boolean | null;
                  inlineCode: boolean | null;
                } | null> | null;
              } | null;
            }
          | { __typename?: "Command" }
          | { __typename?: "Image"; url: string | null; caption: string | null }
          | {
              __typename?: "ImageGroup";
              images: Array<{
                __typename?: "Image";
                url: string | null;
                caption: string | null;
              } | null> | null;
            }
          | { __typename?: "Output" }
          | {
              __typename?: "Paragraph";
              chunks: Array<{
                __typename?: "TextChunk";
                text: string | null;
                highlight: boolean | null;
                bold: boolean | null;
                hyperlinkUrl: string | null;
                strikeout: boolean | null;
                inlineCode: boolean | null;
              } | null> | null;
            }
          | {
              __typename?: "Video";
              platform: VideoPlatform | null;
              url: string | null;
              caption: string | null;
            }
          | null
        > | null;
      }
    | { __typename?: "Image"; url: string | null; caption: string | null }
    | {
        __typename?: "ImageGroup";
        images: Array<{
          __typename?: "Image";
          url: string | null;
          caption: string | null;
        } | null> | null;
      }
    | { __typename?: "Output"; body: string | null }
    | {
        __typename?: "Paragraph";
        chunks: Array<{
          __typename?: "TextChunk";
          text: string | null;
          highlight: boolean | null;
          bold: boolean | null;
          hyperlinkUrl: string | null;
          strikeout: boolean | null;
          inlineCode: boolean | null;
        } | null> | null;
      }
    | {
        __typename?: "Video";
        platform: VideoPlatform | null;
        url: string | null;
        caption: string | null;
      }
    | null
  > | null;
};

export type PageTransitionComponentFragment = {
  __typename?: "Page";
  nextPageNum: string | null;
  prevPageNum: string | null;
};

export type ParagraphComponentFragment = {
  __typename?: "Paragraph";
  chunks: Array<{
    __typename?: "TextChunk";
    text: string | null;
    highlight: boolean | null;
    bold: boolean | null;
    hyperlinkUrl: string | null;
    strikeout: boolean | null;
    inlineCode: boolean | null;
  } | null> | null;
};

export type ProgressBarFragment = {
  __typename?: "Progress";
  currentPageNum: number | null;
  numPages: number | null;
};

export type TextChunkComponentFragment = {
  __typename?: "TextChunk";
  text: string | null;
  highlight: boolean | null;
  bold: boolean | null;
  hyperlinkUrl: string | null;
  strikeout: boolean | null;
  inlineCode: boolean | null;
};

export type GetTutorialQueryVariables = Exact<{ [key: string]: never }>;

export type GetTutorialQuery = {
  __typename?: "Query";
  tutorial: { __typename?: "Tutorial"; title: string | null } | null;
};

export type VideoComponentFragment = {
  __typename?: "Video";
  platform: VideoPlatform | null;
  url: string | null;
  caption: string | null;
};

export const CarouselImageFragmentDoc = gql`
  fragment CarouselImage on Image {
    url
  }
`;
export const CarouselItemFragmentDoc = gql`
  fragment CarouselItem on Image {
    ...CarouselImage
  }
  ${CarouselImageFragmentDoc}
`;
export const CarouselContentFragmentDoc = gql`
  fragment CarouselContent on ImageGroup {
    images {
      ...CarouselItem
    }
  }
  ${CarouselItemFragmentDoc}
`;
export const CarouselComponentFragmentDoc = gql`
  fragment CarouselComponent on ImageGroup {
    ...CarouselContent
  }
  ${CarouselContentFragmentDoc}
`;
export const HeaderContainerFragmentDoc = gql`
  fragment HeaderContainer on Tutorial {
    title
  }
`;
export const PageTransitionComponentFragmentDoc = gql`
  fragment PageTransitionComponent on Page {
    nextPageNum
    prevPageNum
  }
`;
export const ProgressBarFragmentDoc = gql`
  fragment ProgressBar on Progress {
    currentPageNum
    numPages
  }
`;
export const VideoComponentFragmentDoc = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`;
export const TextChunkComponentFragmentDoc = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
    inlineCode
  }
`;
export const ParagraphComponentFragmentDoc = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }
  ${TextChunkComponentFragmentDoc}
`;
export const ImageComponentFragmentDoc = gql`
  fragment ImageComponent on Image {
    url
    caption
  }
`;
export const ImageGroupComponentFragmentDoc = gql`
  fragment ImageGroupComponent on ImageGroup {
    images {
      ...ImageComponent
    }
  }
  ${ImageComponentFragmentDoc}
`;
export const ActionComponentFragmentDoc = gql`
  fragment ActionComponent on Action {
    paragraph {
      ...ParagraphComponent
    }
  }
  ${ParagraphComponentFragmentDoc}
`;
export const FoldableComponentFragmentDoc = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Image {
        ...ImageComponent
      }
      ... on Action {
        ...ActionComponent
      }
    }
  }
  ${VideoComponentFragmentDoc}
  ${ParagraphComponentFragmentDoc}
  ${ImageGroupComponentFragmentDoc}
  ${ImageComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
`;
export const CommandComponentFragmentDoc = gql`
  fragment CommandComponent on Command {
    command
  }
`;
export const OutputComponentFragmentDoc = gql`
  fragment OutputComponent on Output {
    body
  }
`;
export const PageComponentFragmentDoc = gql`
  fragment PageComponent on Page {
    title
    ...PageTransitionComponent
    progress {
      ...ProgressBar
    }
    pageElements {
      ... on Video {
        ...VideoComponent
      }
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on ImageGroup {
        ...ImageGroupComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
      ... on Action {
        ...ActionComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on Output {
        ...OutputComponent
      }
      ... on Image {
        ...ImageComponent
      }
    }
  }
  ${PageTransitionComponentFragmentDoc}
  ${ProgressBarFragmentDoc}
  ${VideoComponentFragmentDoc}
  ${ParagraphComponentFragmentDoc}
  ${ImageGroupComponentFragmentDoc}
  ${FoldableComponentFragmentDoc}
  ${ActionComponentFragmentDoc}
  ${CommandComponentFragmentDoc}
  ${OutputComponentFragmentDoc}
  ${ImageComponentFragmentDoc}
`;
export const GetPageDocument = gql`
  query GetPage($tutorialId: String!, $currentPageNum: String!) {
    tutorial(id: $tutorialId, currentPageNum: $currentPageNum) {
      currentPage {
        ...PageComponent
      }
    }
  }
  ${PageComponentFragmentDoc}
`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      tutorialId: // value for 'tutorialId'
 *      currentPageNum: // value for 'currentPageNum'
 *   },
 * });
 */
export function useGetPageQuery(
  baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageDocument,
    options
  );
}
export function useGetPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageDocument,
    options
  );
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<
  GetPageQuery,
  GetPageQueryVariables
>;
export const GetTutorialDocument = gql`
  query GetTutorial {
    tutorial(id: "wsl") {
      ...HeaderContainer
    }
  }
  ${HeaderContainerFragmentDoc}
`;

/**
 * __useGetTutorialQuery__
 *
 * To run a query within a React component, call `useGetTutorialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTutorialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTutorialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTutorialQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTutorialQuery,
    GetTutorialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTutorialQuery, GetTutorialQueryVariables>(
    GetTutorialDocument,
    options
  );
}
export function useGetTutorialLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTutorialQuery,
    GetTutorialQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTutorialQuery, GetTutorialQueryVariables>(
    GetTutorialDocument,
    options
  );
}
export type GetTutorialQueryHookResult = ReturnType<typeof useGetTutorialQuery>;
export type GetTutorialLazyQueryHookResult = ReturnType<
  typeof useGetTutorialLazyQuery
>;
export type GetTutorialQueryResult = Apollo.QueryResult<
  GetTutorialQuery,
  GetTutorialQueryVariables
>;
