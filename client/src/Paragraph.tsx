/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Paragraph = () => (
  <p
    css={css`
      padding: 4px;
    `}
  >
    Cypressはフロントエンドのend-to-endテストフレームワークの代表格です。ローカル開発環境で
    npx cypress open
    コマンドを実行すれば、Cypressはブラウザを自動で立ち上げて、高速で次々にテストを完了していきます。その軽快な動作は非常に心地よく、フロントエンドのテスト駆動開発を推進するのにピッタリなツールです。CIサーバー上ではブラウザを立ち上げることなくheadlessモードで動作します。
  </p>
);
