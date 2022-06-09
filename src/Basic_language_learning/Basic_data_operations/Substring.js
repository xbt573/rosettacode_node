const substring = (str, n, m, char, sub) => {
	return {
		from_n_to_m: str.substring(n, m),
		from_n_to_end: str.substring(n),
		end_minus_one: str.substring(0, str.length - 1),
		from_known_char: str.substring(str.indexOf(char), m),
		from_known_sub: str.substring(str.indexOf(sub), m)
	};
};

module.exports = substring;