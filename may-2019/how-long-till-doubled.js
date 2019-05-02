function whenDouble (number, interest) {
console.log(number);
	var count = 0,
		originalInvestment = number;
	while(2 * originalInvestment > number) {
		number = number * (1 + interest);
		count += 1;
		console.log("here " + count);
	}
		console.log("it took " + count + " years to double your money");
		console.log(number);
		return "it took " + count + " years to double your money";
}

whenDouble(4e12, 0.02);