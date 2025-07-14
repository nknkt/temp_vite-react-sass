# Vite + React + TypeScript + Sass プロジェクト

## 🚀 特徴

- **React 19** & **TypeScript** による最新フロントエンド開発
- **Vite** による高速ビルド・開発体験
- **Sass（SCSS）** による柔軟なスタイリング
- **ESLint** によるコード品質維持
- **PostCSS** 対応
- **SPAルーティング**（react-router-dom）

## 📦 セットアップ

### 依存パッケージのインストール
```bash
npm install
```

### 開発サーバー起動
```bash
npm run dev
```

### 本番ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

### Lint チェック
```bash
npm run lint
```

## 📁 ディレクトリ構成

```
temp_vite-react-sass/
├── index.html                # エントリーポイントHTML
├── package.json              # パッケージ設定・依存関係
├── vite.config.ts            # Vite設定ファイル
├── tsconfig.json             # TypeScript基本設定
├── tsconfig.app.json         # アプリ用TypeScript設定
├── tsconfig.node.json        # Node.js用TypeScript設定
├── eslint.config.js          # ESLint設定
├── postcss.config.cjs        # PostCSS設定
├── README.md                 # プロジェクトドキュメント
└── src/                      # ソースコードディレクトリ
    ├── App.tsx               # ルートアプリケーションコンポーネント
    ├── main.tsx              # Reactエントリーポイント
    ├── vite-env.d.ts         # Vite型定義ファイル
    ├── assets/               # 静的リソース
    │   ├── images/           # 画像ファイル
    │   │   ├── common/       # 全ページ共通画像
    │   │   │   └── logo.png
    │   │   └── home/         # ホームページ専用画像
    │   │       └── bnr.png
    │   └── styles/           # Sassスタイルシート
    │       ├── global.scss   # グローバルスタイル（メインファイル）
    │       ├── foundation/   # 基礎スタイル
    │       │   ├── _base.scss      # ベーススタイル
    │       │   ├── _destyle.scss   # CSSリセット
    │       │   ├── _fonts.scss     # フォント設定
    │       │   └── _variables.scss # Sass変数・設定値
    │       ├── layout/       # レイアウト用スタイル
    │       │   ├── _footer.scss      # フッター
    │       │   ├── _header.scss      # ヘッダー
    │       │   ├── _main.scss        # メインエリア
    │       │   ├── _navigation.scss  # ナビゲーション
    │       │   └── _page.scss        # ページ全体
    │       └── object/       # オブジェクト指向CSS
    │           ├── component/      # 再利用可能コンポーネント
    │           │   ├── _button.scss      # ボタンスタイル
    │           │   └── _main-visual.scss # メインビジュアル
    │           ├── project/        # ページ固有スタイル
    │           │   ├── _about.scss       # 会社概要ページ
    │           │   ├── _contact-form.scss # お問い合わせフォーム
    │           │   ├── _contact.scss     # お問い合わせページ
    │           │   └── _home.scss        # ホームページ
    │           └── utility/        # ユーティリティクラス
    │               └── _utility.scss
    ├── components/           # Reactコンポーネント
    │   ├── common/           # 共通コンポーネント
    │   │   ├── button.tsx          # ボタンコンポーネント
    │   │   └── main-visual.tsx     # メインビジュアルコンポーネント
    │   ├── feature/          # 機能特化コンポーネント
    │   │   └── contact-form.tsx    # お問い合わせフォーム
    │   └── layout/           # レイアウトコンポーネント
    │       ├── footer.tsx          # フッターコンポーネント
    │       ├── header.tsx          # ヘッダーコンポーネント
    │       ├── layout.tsx          # レイアウトコンポーネント
    │       └── navigation.tsx      # ナビゲーションコンポーネント
    └── pages/                # ページコンポーネント
        ├── about.tsx         # 会社概要ページ
        ├── contact.tsx       # お問い合わせページ
        └── home.tsx          # ホームページ
```

## 🎯 ページとルーティング

- **Home** (`/`) … トップページ
- **About** (`/about`) … 会社概要ページ
- **Contact** (`/contact`) … お問い合わせページ

SPA構成で `react-router-dom` を利用しています。

## 🎨 スタイリング

- **Sass（SCSS）** によるBEM設計・モジュール分割
- **destyle.scss** でリセットCSS
- **カスタム変数・mixin** で一貫したデザイン
- **レスポンシブ対応**

## 🛠️ 主な技術スタック

### フロントエンド
- React 19.1.0
- TypeScript 5.8.3
- React Router DOM 7.6.0

### 開発環境
- Vite 6.3.5
- ESLint 9.25.0
- PostCSS 8.5.3
- Sass (Dart Sass)
