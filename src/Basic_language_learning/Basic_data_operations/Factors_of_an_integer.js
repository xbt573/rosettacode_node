const factors = (int) => {
	int = parseInt(int);
	if (int === NaN) {
		throw 'Failed to parse integer.';
	}

	let allNums = [];
	let factors = [];

	let i = 0;
	while (i <= int) {
		allNums.push(i);
		i++;
	}

	for (const number in allNums) {
		if (int / number == ~~(int / number)) {
			factors.push(parseInt(number));
		}
	}

	return factors;
};

if (require.main == module) {
	const results = factors(process.argv[2]);
	console.log(`Factors: ${results}`);
}

module.exports = factors;