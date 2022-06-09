const logic = (a, b) => {
	return {
		and: a && b,
		or: a || b,
		not: !a
	};
};

module.exports = logic;