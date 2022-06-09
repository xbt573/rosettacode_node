const bitwise = (a, b) => {
	return {
		and: a & b,
		or: a | b,
		xor: a ^ b,
		not: ~a,

		left_shift: a << b,
		right_shift: a >> b
	};
};

module.exports = bitwise;