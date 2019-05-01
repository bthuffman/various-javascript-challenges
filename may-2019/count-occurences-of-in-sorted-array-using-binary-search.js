//STRATEGY
//find the first occurrence of the target
//find the last occurrence of the target
//difference between first and last occurrence + 1 will be the number of occurrences of the target
var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function foo(arr) {
	var a = [], b = [], prev;
//sort the array
	arr.sort();
	//loop over the array
	for ( var i = 0; i < arr.length; i++ ) {
		//if the current index is not the same value as the previous index then push it to the a array and add a 1 for that index to the b array
		if ( arr[i] !== prev ) {
			a.push(arr[i]);
			b.push(1);
			console.log(a);
			console.log("This should just add one to the occurrence count in b array: " + b);
		} //if the current index is the same value as the previous index then increase the number at the current index of b.
		else {
			b[b.length-1]++;
			console.log("This should increase the occurrence count in b array: " + b);
		}
		//set the previous variable value equal to the current index
		prev = arr[i];
	}

	return [a, b];
}

var result = foo(arr);
// console.log('[' + result[0] + ']<br>[' + result[1] + ']');

//returns an array consisting of the value of the occurrences followed by an array containing the number of time those values occur within the inputted array.


///////////////////////////////////////////////////////////////////////////
//SOLUTION they want needs O(log n), the one above is O(n)

//param A : array of integers
//param B : integer
//return an integer
function findCount(A, B){
	var count = 0;
	var first = -1;
	var last = -1;

	var left = 0;
	var right = A.length - 1;
	var mid = 0;
	while (left <= right) {
		mid = Math.floor(left + (right - left) / 2);

		if (A[mid] == B && (mid == 0 || A[mid - 1] != B)) {
			first = mid;
			break;
		} else if (A[mid] < B) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}


	left = first;
	right = A.length - 1;
	while (left <= right) {
		mid = Math.floor(left + (right - left) / 2);

		if (A[mid] == B && (mid == A.length - 1 || A[mid + 1] != B)) {
			last = mid;
			break;
		} else if (A[mid] <= B) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	if (last < 0 || first < 0) {
		return 0;
	}
	console.log("Number of occurrences of " + B + " is " + (last - first + 1));
	return last - first + 1;
}

findCount(arr,5);