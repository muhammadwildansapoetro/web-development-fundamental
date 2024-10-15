/* Number.MIN_VALUE

The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.
*/

function divide(x: number, y: number) {
    if (x / y < Number.MIN_VALUE) {
        return 'Process as 0';
    }
    return x / y;
}

console.log(divide(5e-324, 1));
// Expected output: 5e-324

console.log(divide(5e-324, 2));
// Expected output: "Process as 0"

