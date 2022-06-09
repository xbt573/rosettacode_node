const factors = (int) => {
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

module.exports = factors;