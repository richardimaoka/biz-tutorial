/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { gql } from "@apollo/client";
import { VideoComponentFragment } from "./generated/graphql";
import React from "react";

export interface VideoComponentProps {
  fragment: VideoComponentFragment;
}

export const VideoComponent = ({ fragment }: VideoComponentProps) => {
  if (!fragment.url || !fragment.platform) {
    return <React.Fragment />;
  } else {
    return (
      <div
        css={css`
          padding: 4px;
          display: flex;
          justify-content: center;
          max-width: 768px;
        `}
      >
        <div>
          <iframe
            src={fragment.url}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
};

VideoComponent.fragments = gql`
  fragment VideoComponent on Video {
    platform
    url
  }
`;
