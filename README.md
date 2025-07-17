# Exam Dojo 

基本情報技術者試験対策アプリ（科目B対応）  
Vue.js + Azure Static Web Apps を使った学習用Webアプリです。

##  概要

本プロジェクトは、基本情報技術者試験（FE）に向けた擬似言語の演習問題を解くためのインタラクティブなワークブックアプリです。Vue.jsでフロントエンドを構築し、GitHub ActionsとAzure Static Web Appsで自動デプロイされます。

## 使用技術

- フロントエンド：Vue.js 3
- スタイリング：CSS / Tailwind（またはその他フレームワーク）
- デプロイ：Azure Static Web Apps
- CI/CD：GitHub Actions

## セットアップ方法

```bash
# リポジトリをクローン
git clone https://github.com/Exam-Dojo/Exam.git
cd Exam

# パッケージインストール
npm install

# 開発用サーバ起動
npm run dev

# ディレクトリ構成
Exam/
├── public/              # 公開静的ファイル
├── src/
│   ├── assets/          # 画像やスタイル
│   ├── components/      # Vue コンポーネント
│   ├── pages/           # 各問題ページ
│   └── App.vue          # メインアプリケーション
├── .github/workflows/   # Azure SWA用のGitHub Actions
└── package.json
