/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers
     as parameters and returns the biggest one.
*/

function compare(num1, num2) {
	if (num1>num2) {
		return num1 + ' is the biggest number';
	} else if (num2 > num1) {
		return num2 + ' is the biggest number';
	} else if (num1===num2) {
		return 'The numbers are equal';
	}
}
let results = compare(10, 20);
console.log(results);