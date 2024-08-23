import { toHan } from "./toHan";

describe("全角→半角", () => {
	test("アルファベットを変換", () => {
		expect(toHan("ＡＢＣＤＥ", { alphabet: true })).toBe("ABCDE");
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", { alphabet: true })).toBe(
			"ABC１２３！＠＃　アイウ",
		);
	});

	test("数字を変換", () => {
		expect(toHan("１２３４５", { number: true })).toBe("12345");
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", { number: true })).toBe(
			"ＡＢＣ123！＠＃　アイウ",
		);
	});

	test("記号を変換", () => {
		expect(toHan("！＠＃＄％", { symbol: true })).toBe("!@#$%");
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", { symbol: true })).toBe(
			"ＡＢＣ１２３!@#　アイウ",
		);
	});

	test("スペースを変換", () => {
		expect(toHan("　", { space: true })).toBe(" ");
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", { space: true })).toBe(
			"ＡＢＣ１２３！＠＃ アイウ",
		);
	});

	test("カタカナを変換", () => {
		expect(toHan("アイウエオ", { kana: true })).toBe("ｱｲｳｴｵ");
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", { kana: true })).toBe(
			"ＡＢＣ１２３！＠＃　ｱｲｳ",
		);
	});

	test("すべてを変換", () => {
		expect(
			toHan("ＡＢＣ１２３！＠＃　アイウ", {
				alphabet: true,
				number: true,
				symbol: true,
				space: true,
				kana: true,
			}),
		).toBe("ABC123!@# ｱｲｳ");
	});

	test("オプションを指定しない場合は変換されない", () => {
		expect(toHan("ＡＢＣ１２３！＠＃　アイウ", {})).toBe(
			"ＡＢＣ１２３！＠＃　アイウ",
		);
	});
});
