//match the items from array to new array
function matchingIndexes (a, b) {
	var c = new Array;
	// console.log(a + b + c);
	for (i=0; i<a.length; i++) {
		for (j=0; j<b.length; j++) {
			console.log(a);
			if( a[i] = b[j]) {
				// console.log(c);
				//push to new array if condition met
				c.push([i]);
				//eliminate duplicate
				a.pop(a[i]);
			}
		}
	}
	console.log(c);
	return c;
}
var arrayOne = [1, 1, 2, 3, 5];
var arrayTwo = [1,2,4,5];

matchingIndexes(arrayOne,arrayTwo);