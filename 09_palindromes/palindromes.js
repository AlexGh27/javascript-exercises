const palindromes = function (input) {
	let normal = Array.from(input);
	let rev = normal;
	rev.reverse();
	if (normal === rev) {
		return true;
	}
	else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
