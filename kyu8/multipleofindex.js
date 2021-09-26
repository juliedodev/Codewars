function multipleOfIndex(array) {
	// creating a result array where we'll save the needed elements
	let res = [];

	// loop over the array
	for (let i = 0; i < array.length; i++) {
		// check if the current element (array[i]) is a multiple of it's index (i) and if it is...
		if (array[i] % i === 0) {
			// add it to the resulting array
			res.push(array[i]);
		}
	}

	return res;
}