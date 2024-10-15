/* Number.prototype.toFixed()

The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.


*/

function financial(x: any) {
    return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial('1.23e+5'));
// Expected output: "123000.00"

/*
Syntax
js
Copy to Clipboard
toFixed()
toFixed(digits)
Parameters
digits Optional
The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.

Return value
A string representing the given number using fixed-point notation. Scientific notation is used if the number's magnitude (ignoring sign) is greater than or equal to 1021 (same return value as Number.prototype.toString()).
*/


// Example

const numObj = 12345.6789;

console.log(numObj.toFixed()); // '12346'; rounding, no fractional part
console.log(numObj.toFixed(1)); // '12345.7'; it rounds up
console.log(numObj.toFixed(6)); // '12345.678900'; additional zeros
console.log((1.23e20).toFixed(2)); // '123000000000000000000.00'
console.log((1.23e-10).toFixed(2)); // '0.00'
console.log((2.34).toFixed(1)); // '2.3'
console.log((2.35).toFixed(1)); // '2.4'; it rounds up
console.log((2.55).toFixed(1)); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower

console.log((2.449999999999999999).toFixed(1)); // '2.5'
// it rounds up as it's less than Number.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

console.log((6.02 * 10 ** 23).toFixed(50)); // 6.019999999999999e+23; large numbers still use exponential notation

// Using toFixed() with negative numbers

console.log(-2.34.toFixed(1)); // -2.3, a number
console.log((-2.34).toFixed(1)); // '-2.3'
