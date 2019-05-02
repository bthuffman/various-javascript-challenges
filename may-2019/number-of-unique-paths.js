var factorial = function(n) {
	var result = 1;

	for (var i=n; i>0; i--) {
		result *= i;
	}

	return result;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	if (m == 1 || n == 1) {
		return 1;
	}
	else {
		m--;
		n--;

		return factorial(m+n) / (factorial(m) * factorial(n));
	}
}

var uniquePaths1 = function(m, n) {
	var count = 1;

	// This works, but is slow.
	if (m <= 0 || n <= 0) {
		count = 0;
	}
	else {
		if (m === 1 && n === 1) {
			count = 1;
		}
		else if (m === 2 && n === 1) {
			count = 1;
		}
		else if (m === 1 && n === 2) {
			count = 1;
		}
		else if (m === 2 && n === 2) {
			count = 2;
		}

		if (m > 2 || n > 2) {
			for (var x=m; x>0; x--) {
				for (var y=n; y>0; y--) {
					count += uniquePaths(x - 1, y - 1);
				}
			}
		}
	}
	console.log(count);
	return count;
};

// uniquePaths1(A = 2, B = 2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Their solution, much simplier

//param a : integer
//param b : integer
//return an integer
function uniquePaths3 (a, b){

	var i = 0, j = 0;

	var m = new Array( b );
	console.log(m);
	for( i = 0; i < b; i++ ) {
		m[i] = new Array( a, 0 );
		console.log(m);
	}
	for( i = 0; i < b; i++ ) {
		for( j = 0; j < a; j++ )
			m[i][j] = 0;
		console.log(m);
	}
	m[0][0] = 1;
	for( i = 0; i < b; i++ ) {
		for( j = 0; j < a; j++ ) {
			if( i > 0 )
				m[i][j] += m[i-1][j];
			console.log("fourth" + m);
			if( j > 0 )
				m[i][j] += m[i][j-1];
			console.log(m);
			console.log(m[1][1]);
		}
	}
	console.log(m[b-1][a-1]);
	return m[b-1][a-1];
}

uniquePaths3(2, 2);