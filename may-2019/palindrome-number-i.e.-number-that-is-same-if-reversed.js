function Palindrome(N)
{
	var rem, //serving as remainder to be added to the final reversed number

		final = 0; //serving as the reversed number
	var number = N; //translate poor parameter names by the tester for one that makes sense. This number will be truncated as we work to reverse it and compare.
	var temp = number;//serving as the original number
	//if you watch the console.logs this is an intuitive way in which to gradually reverse the number and then after the while block check to see if that reversal equals the original number! If it does then we have a Palindrome.
	while(number>0)
	{
		//this in tandem with the final = final*10+rem will slowly ad the numbers from the inputed number to a new number called "final", but in reverse order so that it can be compared for Palindrome!
		rem = number%10;
		console.log("remainder is " + rem);
		//If parseInt encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. parseInt truncates numbers to integer values. Thus dividing by 10 removes the last digit from the current number allowing us to continue the reversal of the number process.
		number = parseInt(number/10);
		console.log("updated number is " + number);
		//this along with the rest of the while loop insures that the number is indeed reversed
		final = final*10+rem;
		console.log("final is " + final);
	}
	//insure that the reversed number equals the original number
	if(final==temp)
	{
		// console.log("The inputed number is Palindrome");
		return true;
	}
	else
	{
		// console.log("The inputted number is not palindrome");
		return false;
	}
}

console.log(Palindrome(124321));
console.log(Palindrome(1234321));