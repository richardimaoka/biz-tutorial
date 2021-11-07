import { PageTitle } from "./PageTitleComponent";
import { Paragraph } from "./ParagraphComponent";
import { VideoComponent } from "./VideoComponent";

export const PageElements = () => (
  <div>
    <PageTitle title="概要:cypressはフロントエンドend-to-endテストの代表格、WSLで動かしてみよう！" />
    {/* <Paragraph /> */}
    <VideoComponent />
  </div>
);
