const toHanMap: Record<string, string> = {
	ア: "ｱ",
	イ: "ｲ",
	ウ: "ｳ",
	エ: "ｴ",
	オ: "ｵ",
	カ: "ｶ",
	キ: "ｷ",
	ク: "ｸ",
	ケ: "ｹ",
	コ: "ｺ",
	サ: "ｻ",
	シ: "ｼ",
	ス: "ｽ",
	セ: "ｾ",
	ソ: "ｿ",
	タ: "ﾀ",
	チ: "ﾁ",
	ツ: "ﾂ",
	テ: "ﾃ",
	ト: "ﾄ",
	ナ: "ﾅ",
	ニ: "ﾆ",
	ヌ: "ﾇ",
	ネ: "ﾈ",
	ノ: "ﾉ",
	ハ: "ﾊ",
	ヒ: "ﾋ",
	フ: "ﾌ",
	ヘ: "ﾍ",
	ホ: "ﾎ",
	マ: "ﾏ",
	ミ: "ﾐ",
	ム: "ﾑ",
	メ: "ﾒ",
	モ: "ﾓ",
	ヤ: "ﾔ",
	ユ: "ﾕ",
	ヨ: "ﾖ",
	ラ: "ﾗ",
	リ: "ﾘ",
	ル: "ﾙ",
	レ: "ﾚ",
	ロ: "ﾛ",
	ワ: "ﾜ",
	ヲ: "ｦ",
	ン: "ﾝ",
	ァ: "ｧ",
	ィ: "ｨ",
	ゥ: "ｩ",
	ェ: "ｪ",
	ォ: "ｫ",
	ッ: "ｯ",
	ャ: "ｬ",
	ュ: "ｭ",
	ョ: "ｮ",
	ガ: "ｶﾞ",
	ギ: "ｷﾞ",
	グ: "ｸﾞ",
	ゲ: "ｹﾞ",
	ゴ: "ｺﾞ",
	ザ: "ｻﾞ",
	ジ: "ｼﾞ",
	ズ: "ｽﾞ",
	ゼ: "ｾﾞ",
	ゾ: "ｿﾞ",
	ダ: "ﾀﾞ",
	ヂ: "ﾁﾞ",
	ヅ: "ﾂﾞ",
	デ: "ﾃﾞ",
	ド: "ﾄﾞ",
	バ: "ﾊﾞ",
	ビ: "ﾋﾞ",
	ブ: "ﾌﾞ",
	ベ: "ﾍﾞ",
	ボ: "ﾎﾞ",
	パ: "ﾊﾟ",
	ピ: "ﾋﾟ",
	プ: "ﾌﾟ",
	ペ: "ﾍﾟ",
	ポ: "ﾎﾟ",
	ヴ: "ｳﾞ",
	ヷ: "ﾜﾞ",
	ヺ: "ｦﾞ",
};

const toHanAlphabet = (str: string) => {
	return str.replace(/[Ａ-Ｚａ-ｚ]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
	});
};

const toHanNumber = (str: string) => {
	return str.replace(/[０-９]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
	});
};

const toHanSymbol = (str: string) => {
	return str.replace(/[！-／：-＠［-｀｛-～]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
	});
};

const toHanSpace = (str: string) => {
	return str.replace(/　/g, " ");
};

const toHanKana = (str: string): string => {
	const regex = new RegExp(`(${Object.keys(toHanMap).join("|")})`, "g");
	return str.replace(regex, (s) => toHanMap[s]);
};

export const toHan = (
	str: string,
	{
		alphabet,
		number,
		symbol,
		space,
		kana,
	}: {
		alphabet?: boolean;
		number?: boolean;
		symbol?: boolean;
		space?: boolean;
		kana?: boolean;
	},
) => {
	let result = str;
	if (alphabet === true) {
		result = toHanAlphabet(result);
	}
	if (number === true) {
		result = toHanNumber(result);
	}
	if (symbol === true) {
		result = toHanSymbol(result);
	}
	if (space === true) {
		result = toHanSpace(result);
	}
	if (kana === true) {
		result = toHanKana(result);
	}
	return result;
};
