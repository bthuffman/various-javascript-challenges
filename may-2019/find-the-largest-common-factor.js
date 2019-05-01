
function arrayOfFactors (number) {
	if (isNaN(number))  {
		return "Must enter a valid integer.";
	} else {
		let arrayOfFactors = [];
		//this would create a new array starting with index 0 a value of 0, when we want it to count up to the number provided. Therefore, we need the following uncommented out line of code
		// let newArray =new Array (number);
		//the plus one here insures that we count 0 and all the way up to the number, note this first commented one would work too.
		// let newArray = [...Array(number+1).keys()]
		let newArray = new Array(number+1);
		for(index = 0; index < number; index++) newArray[index] = index;
		// console.log(newArray);
		for (i=0; i<newArray.length; i++) {
			if (number%i === 0) {
				arrayOfFactors.push(i);
				// console.log(i);
			}
		}
		return arrayOfFactors;
	}
}

// console.log(arrayOfFactors( 85463)); // [ 1, 7, 29, 203, 421, 2947, 12209, 85463]
// console.log(arrayOfFactors("twelve")); //Must enter a valid integer.

function findLargestCommonFactor (a, b) {
	//find all the factors of the two arrays
	var firstArrayOfFactors = arrayOfFactors(a);
	var secondArrayOfFactors = arrayOfFactors(b);
	// console.log(firstArrayOfFactors);
	// console.log(secondArrayOfFactors);
	// var secondArrayLength = secondArrayOfFactors.length;
	// console.log(secondArrayLength);
	// console.log(secondArrayOfFactors[secondArrayLength]);//returns undefined
	//if the first array has more factors then the second then loop through the second array comparing the last value in the second to all the values in the first
	if(firstArrayOfFactors.length >= secondArrayOfFactors.length) {
		for(j = secondArrayOfFactors.length-1; j >= 0; j--) {
			// console.log("Current index in second array: " + secondArrayOfFactors[j]);
			for(i = firstArrayOfFactors.length - 1; i >= 0; i--) {
				// console.log("Current index in first array: " + firstArrayOfFactors[i]);
				if(firstArrayOfFactors[i] === secondArrayOfFactors[j]) {
					console.log("They match at this number: " + firstArrayOfFactors[i]);
					return firstArrayOfFactors[i];
				}
			}
		}
	} else {
		for(j = firstArrayOfFactors.length-1; j >= 0; j--) {
			// console.log("Current index in second array: " + firstArrayOfFactors[j]);
			for(i = secondArrayOfFactors.length - 1; i >= 0; i--) {
				// console.log("Current index in first array: " + secondArrayOfFactors[i]);
				if(secondArrayOfFactors[i] === firstArrayOfFactors[j]) {
					console.log("They match at this number: " + secondArrayOfFactors[i]);
					return secondArrayOfFactors[i];
				}
			}
		}
	}
	return 0;
}

// findLargestCommonFactor(24,6);

//to work on the interviewbit.com it must be like this

function gcd (A, B){
	var x = A, y =B;
	if ((typeof x !== 'number') || (typeof y !== 'number'))
		return false;
	//return the absolute value of these numbers
	x = Math.abs(x);
	y = Math.abs(y);

	//this will continue until y = 0. It returns the number at which is the greatest common factor which in this case will be 3.
	while(y) {
		//this serves to set the largest common factor equal to x later if the following y = x%y returns 0 instead of a remainder. If it returns 0 then the current value of t is the largest common factor.
		var t = y;
		console.log("T = " + t);
		//dividing x by y allows to determine a remainder which serves to produce the next largest common factor.
		y = x % y;
		console.log("Y = " + y);
		//this serves to set the largest common factor equal to x. If x % y doesn't return 0 then this whole while loop will continue until y is of a value that can modulus into x without a remainder.
		x = t;
		console.log("X = " + x);
	}
	return x;
}
console.log(gcd(12, 9));