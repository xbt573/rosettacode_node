const compare = (a, b) => {
	switch (true) {
		case a > b:
			return 'bigger';
		case a < b:
			return 'smaller';
		case a === b:
			return 'equal';
		default:
			throw 'Incorrect arguments.';
	}
};

module.exports = compare;