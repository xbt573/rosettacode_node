const compare = (list) => {
	let outlist = [];

	list.sort((a, b) => { return b.length - a.length }).forEach((str) => {
		outlist.push({string: str, length: str.length});
	});

	return outlist;
};

if (require.main == module) {
	const list = ["abcd","123456789","abcdef","1234567"];
	const results = compare(list);

	results.forEach((element) => {
		console.log(`String: "${element.string}"`);
		console.log(`Length: ${element.length}`);
		console.log('');
	});
}

module.exports = compare;