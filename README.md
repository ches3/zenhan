# @ches3/zenhan

全角文字・半角文字を変換するライブラリです。

## インストール

### bun
```bash
bun add @ches3/zenhan
```

### npm
```bash
npm i @ches3/zenhan
```

## 使い方

```javascript
import { toHan, toZen } from '@ches3/zenhan';

// 全角 → 半角
toHan("ＡＢＣＤＥ", { alphabet: true }); // "ABCDE"
toHan("１２３４５", { number: true }); // "12345"
toHan("！#$", { symbol: true }); // "!#$"
toHan("　", { space: true }); // " "
toHan("アイウエオ", { kana: true }); // "ｱｲｳｴｵ"
toHan(
  "ＡＢＣ１２３！＠＃　アイウ",
  { alphabet: true, number: true, symbol: true, space: true, kana: true }
); // "ABC123!@# ｱｲｳ"

// 半角 → 全角
toZen("ABCDE", { alphabet: true }); // "ＡＢＣＤＥ"
toZen("12345", { number: true }); // "１２３４５"
toZen("!#$", { symbol: true }); // "！＃＄"
toZen(" ", { space: true }); // "　"
toZen("ｱｲｳｴｵ", { kana: true }); // "アイウエオ"
toZen(
  "ABC123!@# ｱｲｳ",
  { alphabet: true, number: true, symbol: true, space: true, kana: true }
); // "ＡＢＣ１２３！＠＃　アイウ"
```

## ライセンス
[MIT](LICENSE)
