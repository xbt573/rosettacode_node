const compare = (a, b) => {
	a = parseInt(a);
	b = parseInt(b);

	if (String(a) == String(NaN)) {
		throw 'Failed to parse a.';
	}

	if (String(b) == String(NaN)) {
		throw 'Failed to parse b.';
	}

	switch (true) {
		case a > b:
			return 'bigger';
		case a < b:
			return 'smaller';
		case a === b:
			return 'equal';
		default:
			throw '0_0';
	}
};

if (require.main == module) {
	const result = compare(process.argv[2], process.argv[3]);

	switch (result) {
		case 'bigger':
			console.log('First integer is bigger than second.')
			break;
		case 'smaller':
			console.log('First integer is smaller than second');
			break;
		case 'equal':
			console.log('Integers are equal.');
			break;
	}
}

module.exports = compare;