/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const VideoComponent = () => (
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
        src="https://player.vimeo.com/video/237527670?h=5c82f4424c&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://vimeo.com/237527670">What is Cypress?</a> from{" "}
        <a href="https://vimeo.com/user72267166">Cypress.io</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>
      </p>
    </div>
  </div>
);
