const compare = (list) => {
	let outlist = [];

	list.sort((a, b) => { return b.length - a.length }).forEach((str) => {
		outlist.push({string: str, length: str.length});
	});

	return outlist;
};

module.exports = compare;