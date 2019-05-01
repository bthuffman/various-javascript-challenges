var binaryOne = "1101000";
function findBaseTenEquivalent(A) {
let binary=A;

	var digit = parseInt(binary, 2);
	console.log(digit);
	return digit;
}

findBaseTenEquivalent(binaryOne); //base 10 equivalent 104

function findDigitsInBinary(A) {
	var str = A;
	var bin = (+str).toString(2);
	console.log(bin);
}
findDigitsInBinary(6); //binary equivalent 110