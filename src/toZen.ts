const toZenMap: Record<string, string> = {
	ｱ: "ア",
	ｲ: "イ",
	ｳ: "ウ",
	ｴ: "エ",
	ｵ: "オ",
	ｶ: "カ",
	ｷ: "キ",
	ｸ: "ク",
	ｹ: "ケ",
	ｺ: "コ",
	ｻ: "サ",
	ｼ: "シ",
	ｽ: "ス",
	ｾ: "セ",
	ｿ: "ソ",
	ﾀ: "タ",
	ﾁ: "チ",
	ﾂ: "ツ",
	ﾃ: "テ",
	ﾄ: "ト",
	ﾅ: "ナ",
	ﾆ: "ニ",
	ﾇ: "ヌ",
	ﾈ: "ネ",
	ﾉ: "ノ",
	ﾊ: "ハ",
	ﾋ: "ヒ",
	ﾌ: "フ",
	ﾍ: "ヘ",
	ﾎ: "ホ",
	ﾏ: "マ",
	ﾐ: "ミ",
	ﾑ: "ム",
	ﾒ: "メ",
	ﾓ: "モ",
	ﾔ: "ヤ",
	ﾕ: "ユ",
	ﾖ: "ヨ",
	ﾗ: "ラ",
	ﾘ: "リ",
	ﾙ: "ル",
	ﾚ: "レ",
	ﾛ: "ロ",
	ﾜ: "ワ",
	ｦ: "ヲ",
	ﾝ: "ン",
	ｧ: "ァ",
	ｨ: "ィ",
	ｩ: "ゥ",
	ｪ: "ェ",
	ｫ: "ォ",
	ｯ: "ッ",
	ｬ: "ャ",
	ｭ: "ュ",
	ｮ: "ョ",
	ｶﾞ: "ガ",
	ｷﾞ: "ギ",
	ｸﾞ: "グ",
	ｹﾞ: "ゲ",
	ｺﾞ: "ゴ",
	ｻﾞ: "ザ",
	ｼﾞ: "ジ",
	ｽﾞ: "ズ",
	ｾﾞ: "ゼ",
	ｿﾞ: "ゾ",
	ﾀﾞ: "ダ",
	ﾁﾞ: "ヂ",
	ﾂﾞ: "ヅ",
	ﾃﾞ: "デ",
	ﾄﾞ: "ド",
	ﾊﾞ: "バ",
	ﾋﾞ: "ビ",
	ﾌﾞ: "ブ",
	ﾍﾞ: "ベ",
	ﾎﾞ: "ボ",
	ﾊﾟ: "パ",
	ﾋﾟ: "ピ",
	ﾌﾟ: "プ",
	ﾍﾟ: "ペ",
	ﾎﾟ: "ポ",
	ｳﾞ: "ヴ",
	ﾜﾞ: "ヷ",
	ｦﾞ: "ヺ",
};

const toZenAlphabet = (str: string) => {
	return str.replace(/[A-Za-z]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
	});
};

const toZenNumber = (str: string) => {
	return str.replace(/[0-9]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
	});
};

const toZenSymbol = (str: string) => {
	return str.replace(/[!-\/:-@\[-`{-~]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
	});
};

const toZenSpace = (str: string) => {
	return str.replace(/ /g, "　");
};

const toZenKana = (str: string): string => {
	const regex = new RegExp(`(${Object.keys(toZenMap).join("|")})`, "g");
	return str.replace(regex, (s) => toZenMap[s]);
};

export const toZen = (
	str: string,
	{
		alphabet,
		number,
		symbol,
		space,
		kana,
	}: {
		alphabet?: boolean;
		symbol?: boolean;
		number?: boolean;
		space?: boolean;
		kana?: boolean;
	},
) => {
	let result = str;
	if (alphabet === true) {
		result = toZenAlphabet(result);
	}
	if (number === true) {
		result = toZenNumber(result);
	}
	if (symbol === true) {
		result = toZenSymbol(result);
	}
	if (space === true) {
		result = toZenSpace(result);
	}
	if (kana === true) {
		result = toZenKana(result);
	}
	return result;
};
