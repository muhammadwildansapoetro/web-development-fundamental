/* String.prototype.substring()

The substring() method of String values returns the part of this string from the start index up to and excluding the end index, 
or to the end of the string if no end index is supplied.
*/

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

/*
Syntax:
    substring(indexStart)
    substring(indexStart, indexEnd)

Parameters:

indexStart
    The index of the first character to include in the returned substring.

indexEnd (Optional)
    The index of the first character to exclude from the returned substring.

Return value
    A new string containing the specified part of the given string.
*/

/* Examples

Using substring()
    The following example uses substring() to display characters from the string "Mozilla":
*/

const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // "M"
console.log(anyString.substring(1, 0)); // "M"

console.log(anyString.substring(0, 6)); // "Mozill"

console.log(anyString.substring(4)); // "lla"
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"

console.log(anyString.substring(0, 7)); // "Mozilla"
console.log(anyString.substring(0, 10)); // "Mozilla"

/* Using substring() with length property

The following example uses the substring() method 
and length property to extract the last characters of a particular string. 
This method may be easier to remember, 
given that you don't need to know the starting 
and ending indices as you would in the above examples.
*/

const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"

/* The difference between substring() and substr()

There are subtle differences between the substring() and substr() methods, 
so you should be careful not to get them confused.

- The two parameters of substr() are start and length, while for substring(), they are start and end.
- substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
- Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.

Furthermore, substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.
*/

const text2 = "Mozilla";
console.log(text2.substring(2, 5)); // "zil"
console.log(text2.substr(2, 3)); // "zil"

/*Differences between substring() and slice()

The substring() and slice() methods are almost identical, 
but there are a couple of subtle differences between the two, 
especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, 
meaning that a string is still returned. The slice() method returns an empty string if this is the case.
*/

const text3 = "Mozilla";
console.log(text3.substring(5, 2)); // "zil"
console.log(text3.slice(5, 2)); // ""

/* If either or both of the arguments are negative or NaN, 
the substring() method treats them as if they were 0. */

console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""

/* slice() also treats NaN arguments as 0, 
but when it is given negative values it counts backwards from the end of the string to find the indexes. */

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"

/* Replacing a substring within a string

The following example replaces a substring within a string. 
It will replace both individual characters and substrings. 
The function call at the end of the example creates a string Brave New Web from the original string Brave New World. */

// Replaces oldS with newS in the string fullS

function replaceString(oldS: string, newS: string, fullS: string) {
    for (let i = 0; i < fullS.length; ++i) {
        if (fullS.substring(i, i + oldS.length) === oldS) {
            fullS =
                fullS.substring(0, i) +
                newS +
                fullS.substring(i + oldS.length, fullS.length);
        }
    }
    return fullS;
}

console.log(replaceString("World", "Web", "Brave New World"));

/* Note that this can result in an infinite loop if oldS is itself a substring of newS — 
for example, if you attempted to replace "World" with "OtherWorld" here.

A better method for replacing strings is as follows: */

function replaceString2(oldS: string, newS: string, fullS: string) {
    return fullS.split(oldS).join(newS);
}

console.log(replaceString2("World", "Web", "Brave New World"));