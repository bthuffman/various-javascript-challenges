function binarySearch (arr, n, target) {
	//arr is a sorted array, n is size of that array and target is element to be found
	var start = 0,
		middle= 0,
		count=0,
		end = n-1;
	while(start <=end) {
		//take the middle of the list
		middle = Math.round(((start + end) /2));
		// console.log("This is the middle value: " + middle);
		//see if found the target's match and if we do return it!
		if(arr[middle] == target) {
			// console.log(count);
			return count;
		} else if (arr[middle] < target) {
			//this will effectively cut off everything to the left of and including the current middle value, part of the magic of binary sort
			start = middle + 1;
			count += 1;
			// console.log("The start location has changed to: " + start);
		} else {
			//this will effectively cut off everything to the right of and including the current middle value, part of the magic of binary sort
			end = middle - 1;
			count += 1;
			// console.log("The end location has changed to: " + end);
		}
	}
	//if these methods above fail then it will..
	// console.log("target not in the array");
	return -1;
}

var arrayOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lengthOne = arrayOne.length;
var targetOne = 5;
// binarySearch(arrayOne, lengthOne, targetOne);//returns 0, because 5, the target is dead center of the array.
var arrayTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var lengthTwo = arrayTwo.length;
var targetTwo = 5;
binarySearch(arrayTwo, lengthTwo, targetTwo);//returns 0, because 5, the target is dead center of the array.