
// function primeSum (A) {
//   //insure input is an even number and not 2
//   if (A%2 ===0) {
//     if (A !=2) {
//       	
//   //first create an array of all possible numbers that can add up to the input
// 	var allDigits = new Array(A+1);
//   for(index = 0; index <= A; index++) allDigits[index] = index;
// 	// console.log(allDigits);
// 	//create arrayOfSum which consists of the prime integers that can add up to the input
// 	var arrayOfSum = [];
// 	//run loop that pushes the prime integers that add up to the in put to the arrayOfSum var.
// 	for (i=0; i<((allDigits.length)/2); i++) {
// 		console.log(allDigits[i]);
// 	  console.log(allDigits[A-i]);
//     if (test_prime(allDigits[i]) == true && test_prime(allDigits[A-i]) == true) {
//       arrayOfSum.push(allDigits[i]);
//       arrayOfSum.push(allDigits[A-i]);
//       return arrayOfSum;
//     }
// 	}
//   } else {
//     return "input must be greater than 2";
//   }
//   } else {
//     return "not an even number";
//   }
// 	// return arrayOfSum//array of integers
// }



function primeSum(A) {
	var ans= [];
	for(i = A-2; i>=2; i--)
	{
		var num1 = i, num2 = A-i;
		var lim1 = Math.sqrt(num1), lim2 = Math.sqrt(num2);
		var isprime1 = true, isprime2 = true;
		for(j = 2; j <= lim1; j++)
		{
			if(num1%j == 0)
			{
				isprime1 = false;
				break;
			}
		}
		for(j = 2; j <= lim2; j++)
		{
			if(num2%j == 0)
			{
				isprime2 = false;
				break;
			}
		}
		if(isprime1 == true && isprime2 == true)
		{
// console.log(num2 + " " + num1);
			ans.push(num2, num1);
			return ans;
		}
	}
}

primeSum(10); // 3,7
// primeSum(24);
// primeSum(25); //not an even number
// primeSum(2); //input must be greater than 2