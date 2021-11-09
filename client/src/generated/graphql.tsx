import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Action = {
  __typename?: 'Action';
  paragraph: Maybe<Paragraph>;
};

export type Command = {
  __typename?: 'Command';
  command: Maybe<Scalars['String']>;
};

export type CommandAndOutput = {
  __typename?: 'CommandAndOutput';
  command: Maybe<Scalars['String']>;
  output: Maybe<Scalars['String']>;
};

export type DirectoryStructure = {
  __typename?: 'DirectoryStructure';
  contents: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Foldable = {
  __typename?: 'Foldable';
  elements: Maybe<Array<Maybe<PlainElement>>>;
  shortDescription: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  caption: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ImageGroup = {
  __typename?: 'ImageGroup';
  images: Maybe<Array<Maybe<Image>>>;
};

export type Note = {
  __typename?: 'Note';
  body: Maybe<Scalars['String']>;
};

export type Output = {
  __typename?: 'Output';
  body: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  pageElements: Maybe<Array<Maybe<PageElement>>>;
  title: Maybe<Scalars['String']>;
};

export type PageElement = Command | Foldable | ImageGroup | Output | Paragraph | Video;

export type Paragraph = {
  __typename?: 'Paragraph';
  chunks: Maybe<Array<Maybe<TextChunk>>>;
};

export type PlainElement = Command | Output | Paragraph | Video;

export type Progress = {
  __typename?: 'Progress';
  currentPageNum: Maybe<Scalars['Int']>;
  numPages: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  tutorial: Maybe<Tutorial>;
};


export type QueryTutorialArgs = {
  name: Maybe<Scalars['String']>;
  owner: Maybe<Scalars['String']>;
};

export type TextChunk = {
  __typename?: 'TextChunk';
  bold: Maybe<Scalars['Boolean']>;
  highlight: Maybe<Scalars['Boolean']>;
  hyperlinkUrl: Maybe<Scalars['String']>;
  strikeout: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
};

export type Tutorial = {
  __typename?: 'Tutorial';
  currentPage: Maybe<Page>;
  pages: Maybe<Array<Maybe<Page>>>;
  progress: Maybe<Progress>;
  title: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  caption: Maybe<Scalars['String']>;
  platform: Maybe<VideoPlatform>;
  url: Maybe<Scalars['String']>;
};

export enum VideoPlatform {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE'
}

export type ActionComponentFragment = { __typename?: 'Action', paragraph: { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null } | null> | null } | null };

export type TopLevdelQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TopLevdelQueryQuery = { __typename?: 'Query', tutorial: { __typename?: 'Tutorial', title: string | null, progress: { __typename?: 'Progress', currentPageNum: number | null, numPages: number | null } | null, currentPage: { __typename?: 'Page', title: string | null, pageElements: Array<{ __typename?: 'Command' } | { __typename?: 'Foldable' } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null, caption: string | null } | null> | null } | { __typename?: 'Output' } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null } | null> | null } | { __typename?: 'Video', platform: VideoPlatform | null, url: string | null, caption: string | null } | null> | null } | null } | null };

export type HeaderContainerFragment = { __typename?: 'Tutorial', title: string | null };

export type ImageComponentFragment = { __typename?: 'Image', url: string | null, caption: string | null };

export type ImageGroupComponentFragment = { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null, caption: string | null } | null> | null };

export type MainContainerFragment = { __typename?: 'Tutorial', progress: { __typename?: 'Progress', currentPageNum: number | null, numPages: number | null } | null, currentPage: { __typename?: 'Page', title: string | null, pageElements: Array<{ __typename?: 'Command' } | { __typename?: 'Foldable' } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null, caption: string | null } | null> | null } | { __typename?: 'Output' } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null } | null> | null } | { __typename?: 'Video', platform: VideoPlatform | null, url: string | null, caption: string | null } | null> | null } | null };

export type PageComponentFragment = { __typename?: 'Page', title: string | null, pageElements: Array<{ __typename?: 'Command' } | { __typename?: 'Foldable' } | { __typename?: 'ImageGroup', images: Array<{ __typename?: 'Image', url: string | null, caption: string | null } | null> | null } | { __typename?: 'Output' } | { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null } | null> | null } | { __typename?: 'Video', platform: VideoPlatform | null, url: string | null, caption: string | null } | null> | null };

export type ParagraphComponentFragment = { __typename?: 'Paragraph', chunks: Array<{ __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null } | null> | null };

export type ProgressBarFragment = { __typename?: 'Progress', currentPageNum: number | null, numPages: number | null };

export type TextChunkComponentFragment = { __typename?: 'TextChunk', text: string | null, highlight: boolean | null, bold: boolean | null, hyperlinkUrl: string | null, strikeout: boolean | null };

export type VideoComponentFragment = { __typename?: 'Video', platform: VideoPlatform | null, url: string | null, caption: string | null };

export const TextChunkComponentFragmentDoc = gql`
    fragment TextChunkComponent on TextChunk {
  text
  highlight
  bold
  hyperlinkUrl
  strikeout
}
    `;
export const ParagraphComponentFragmentDoc = gql`
    fragment ParagraphComponent on Paragraph {
  chunks {
    ...TextChunkComponent
  }
}
    ${TextChunkComponentFragmentDoc}`;
export const ActionComponentFragmentDoc = gql`
    fragment ActionComponent on Action {
  paragraph {
    ...ParagraphComponent
  }
}
    ${ParagraphComponentFragmentDoc}`;
export const HeaderContainerFragmentDoc = gql`
    fragment HeaderContainer on Tutorial {
  title
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
    ${ImageComponentFragmentDoc}`;
export const PageComponentFragmentDoc = gql`
    fragment PageComponent on Page {
  title
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
  }
}
    ${VideoComponentFragmentDoc}
${ParagraphComponentFragmentDoc}
${ImageGroupComponentFragmentDoc}`;
export const MainContainerFragmentDoc = gql`
    fragment MainContainer on Tutorial {
  progress {
    ...ProgressBar
  }
  currentPage {
    ...PageComponent
  }
}
    ${ProgressBarFragmentDoc}
${PageComponentFragmentDoc}`;
export const TopLevdelQueryDocument = gql`
    query TopLevdelQuery {
  tutorial {
    ...HeaderContainer
    ...MainContainer
  }
}
    ${HeaderContainerFragmentDoc}
${MainContainerFragmentDoc}`;

/**
 * __useTopLevdelQueryQuery__
 *
 * To run a query within a React component, call `useTopLevdelQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopLevdelQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopLevdelQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopLevdelQueryQuery(baseOptions?: Apollo.QueryHookOptions<TopLevdelQueryQuery, TopLevdelQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopLevdelQueryQuery, TopLevdelQueryQueryVariables>(TopLevdelQueryDocument, options);
      }
export function useTopLevdelQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopLevdelQueryQuery, TopLevdelQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopLevdelQueryQuery, TopLevdelQueryQueryVariables>(TopLevdelQueryDocument, options);
        }
export type TopLevdelQueryQueryHookResult = ReturnType<typeof useTopLevdelQueryQuery>;
export type TopLevdelQueryLazyQueryHookResult = ReturnType<typeof useTopLevdelQueryLazyQuery>;
export type TopLevdelQueryQueryResult = Apollo.QueryResult<TopLevdelQueryQuery, TopLevdelQueryQueryVariables>;