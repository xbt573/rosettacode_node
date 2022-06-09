const bitwise = (a, b) => {
	a = parseInt(a);
	b = parseInt(b);

	if (String(a) == String(NaN)) {
		throw 'Failed to parse a.';
	}

	if (String(b) == String(NaN)) {
		throw 'Failed to parse b.';
	}

	return {
		and: a & b,
		or: a | b,
		xor: a ^ b,
		not: ~a,

		left_shift: a << b,
		right_shift: a >> b
	};
};

if (require.main == module) {
	const results = bitwise(process.argv[2], process.argv[3]);

	console.log(`AND: ${results.and}`);
	console.log(`OR:  ${results.or}`);
	console.log(`XOR: ${results.xor}`);
	console.log(`NOT: ${results.not}`);

	console.log(`Left shift:  ${results.left_shift}`);
	console.log(`Right shift: ${results.right_shift}`);

	console.log('Right arithmetic shift and left/right rotate is not available');
}

module.exports = bitwise;