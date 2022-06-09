const compare = (a, b) => {
	return {
		equal: a === b,
		not_equal: a !== b,
		greater: a > b,
		less: a < b
	};
};

module.exports = compare;