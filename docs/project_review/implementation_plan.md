# Implementation Plan - Project Improvements

プロジェクトのレビュー結果に基づき、以下の改善を提案します。

## User Review Required

> [!IMPORTANT]
> `src/pages/index.astro` のHTML構造が不正（`<head>`タグがない）であり、これがCSSの読み込み不良の原因になっている可能性があります。

## Proposed Changes

### HTML Structure Fix
-   **File**: `src/pages/index.astro`
-   **Change**: `<BaseHead>` と `<style>` を `<head>` タグで囲むように修正します。正しいHTML構造にすることで、ブラウザやAstroがスタイルを正しく解釈できるようになります。

### Code Cleanup (CSS Imports)
-   **Files**: `src/pages/index.astro`, `src/layouts/BlogPost.astro`
-   **Change**: 明示的な `import "../styles/global.css";` を削除します。
    -   `BaseHead.astro` 内ですでに読み込まれているため、HTML構造が正しければこれらは不要です。二重読み込みを防ぎます。

### Accessibility Improvements
-   **File**: `src/pages/index.astro`
-   **Change**: プロフィール画像の `alt` 属性に適切なテキスト（例: "Ishikawa's Icon"）を追加します。

## Verification Plan

### Manual Verification
1.  開発サーバー (`npm run dev`) を起動する。
2.  トップページ (`/`) を開き、レイアウト崩れがないか確認する。
3.  ブログ記事ページ (`/blog/...`) を開き、スタイルが適用されているか確認する。
4.  ブラウザの開発者ツールで、`<head>` 内にスタイルシートが正しく読み込まれているか確認する。
