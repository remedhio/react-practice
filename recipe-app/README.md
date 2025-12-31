# レシピ管理アプリ

React + Viteで作成したレシピ管理アプリケーションです。レシピの追加、編集、削除ができ、データはlocalStorageに保存されます。

## 機能

- ✅ **レシピの追加**: レシピ名と材料を入力して新しいレシピを登録
- ✅ **レシピの一覧表示**: 登録されたレシピを一覧で表示
- ✅ **レシピの編集**: 既存のレシピを編集して更新
- ✅ **レシピの削除**: 不要なレシピを削除
- ✅ **データの永続化**: localStorageを使用してデータを保存（ページリロード後もデータが保持される）

## 技術スタック

- **React 19.2.0**: UIライブラリ
- **Vite 7.2.4**: ビルドツール
- **localStorage**: データの永続化

## セットアップ

### 必要な環境

- Node.js (推奨: v18以上)
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>

# ディレクトリに移動
cd recipe-app

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開いてアプリケーションを確認できます。

## プロジェクト構造

```
recipe-app/
├── src/
│   ├── components/
│   │   ├── RecipeForm.jsx    # レシピの追加・編集フォーム
│   │   └── RecipeList.jsx     # レシピ一覧表示
│   ├── App.jsx               # メインコンポーネント（状態管理）
│   └── main.jsx              # エントリーポイント
├── package.json
└── README.md
```

## 主な機能の説明

### 1. コンポーネント分割

アプリケーションを以下の3つのコンポーネントに分割しています：

- **App.jsx**: 状態管理とデータの永続化を担当
- **RecipeForm.jsx**: レシピの追加・編集フォーム
- **RecipeList.jsx**: レシピ一覧の表示

### 2. 状態管理

`useState`を使用して以下の状態を管理：

- `recipes`: レシピの配列
- `editingId`: 編集中のレシピのID（`null`の場合は新規作成モード）
- `isInitialized`: localStorageの初期化フラグ

### 3. データの永続化（localStorage）

`useEffect`を使用してlocalStorageにデータを保存・読み込み：

```jsx
// 初回マウント時にlocalStorageからデータを読み込む
useEffect(() => {
  setIsInitialized(true);
}, []);

// recipesが変更されるたびにlocalStorageに保存
useEffect(() => {
  if (isInitialized) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
}, [recipes, isInitialized]);
```

### 4. CRUD操作

- **Create（作成）**: `addRecipe`関数で新しいレシピを追加
- **Read（読み取り）**: `recipes`配列からレシピを表示
- **Update（更新）**: `updateRecipe`関数で既存のレシピを更新
- **Delete（削除）**: `deleteRecipe`関数でレシピを削除

### 5. 編集機能

- 編集ボタンをクリックすると、該当レシピの情報がフォームに表示される
- フォームのボタンが「登録」から「更新」に変更される
- キャンセルボタンで編集をキャンセルできる

## 学んだこと

### React Hooks

- **useState**: コンポーネントの状態管理
- **useEffect**: 副作用（localStorageへの保存・読み込み）の処理

### コンポーネント設計

- **単一責任の原則**: 各コンポーネントが明確な役割を持つ
- **Props**: 親コンポーネントから子コンポーネントへのデータの受け渡し
- **コールバック関数**: 子コンポーネントから親コンポーネントへのデータの受け渡し

### データの流れ

```
App (状態管理)
  ↓ props
RecipeForm, RecipeList (表示・入力)
  ↓ コールバック関数
App (状態更新)
```

### localStorageの使い方

- `localStorage.setItem(key, value)`: データを保存（文字列のみ）
- `localStorage.getItem(key)`: データを取得
- `JSON.stringify()` / `JSON.parse()`: オブジェクトと文字列の変換

## 開発コマンド

```bash
# 開発サーバーを起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# リンターを実行
npm run lint
```

## 今後の改善案

- [ ] レシピの検索機能
- [ ] レシピのカテゴリー分類
- [ ] レシピの画像アップロード
- [ ] レシピの並び替え機能
- [ ] レスポンシブデザインの改善
- [ ] TypeScriptへの移行
