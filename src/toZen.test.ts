import { toZen } from "./toZen";

describe("半角→全角", () => {
	test("アルファベットを変換", () => {
		expect(toZen("ABCDE", { alphabet: true })).toBe("ＡＢＣＤＥ");
		expect(toZen("ABC123!@# ｱｲｳ", { alphabet: true })).toBe("ＡＢＣ123!@# ｱｲｳ");
	});

	test("数字を変換", () => {
		expect(toZen("12345", { number: true })).toBe("１２３４５");
		expect(toZen("ABC123!@# ｱｲｳ", { number: true })).toBe("ABC１２３!@# ｱｲｳ");
	});

	test("記号を変換", () => {
		expect(toZen("!@#$%", { symbol: true })).toBe("！＠＃＄％");
		expect(toZen("ABC123!@# ｱｲｳ", { symbol: true })).toBe("ABC123！＠＃ ｱｲｳ");
	});

	test("スペースを変換", () => {
		expect(toZen(" ", { space: true })).toBe("　");
		expect(toZen("ABC123!@# ｱｲｳ", { space: true })).toBe("ABC123!@#　ｱｲｳ");
	});

	test("カタカナを変換", () => {
		expect(toZen("ｱｲｳｴｵ", { kana: true })).toBe("アイウエオ");
		expect(toZen("ABC123!@# ｱｲｳ", { kana: true })).toBe("ABC123!@# アイウ");
	});

	test("すべてを変換", () => {
		expect(
			toZen("ABC123!@# ｱｲｳ", {
				alphabet: true,
				number: true,
				symbol: true,
				space: true,
				kana: true,
			}),
		).toBe("ＡＢＣ１２３！＠＃　アイウ");
	});

	test("オプションを指定しない場合は変換されない", () => {
		expect(toZen("ABC123!@# ｱｲｳ", {})).toBe("ABC123!@# ｱｲｳ");
	});
});
