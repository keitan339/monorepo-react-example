# npm workspace

## プロジェクト追加
```sh
npm init -w packages/example-lib-ui
```

## 各プロジェクトのシンボリックリンクを作成
```sh
npm install
```

## 各プロジェクトに依存ライブラリを追加
```sh
npm install -w packages/example-lib-core react --save-peer
```