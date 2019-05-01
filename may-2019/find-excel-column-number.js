function columnTitleToNumber (A){
	var result = 0;

	for (var i=0; i<A.length; i++) {
		result *= 26;
		console.log(A.charCodeAt(i)); //starts at 65 (A). Z would be 90
		console.log('A'.charCodeAt(0)); //always returns 65, i.e. where A would be in excel
		result += ((A.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);
	}

	return result;
}

// console.log(columnTitleToNumber("A")); //1
console.log(columnTitleToNumber("Z")); //26
// console.log(columnTitleToNumber("AA")); //27