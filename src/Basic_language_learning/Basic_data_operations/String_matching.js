const match = (a, b) => {
	return {
		starts: a.startsWith(b),
		contains: a.includes(b),
		ends: a.endsWith(b)
	};
};

module.exports = match;