// Question 3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, 
// using a number to show how many times the repeated character has been compressed. 
// For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example Input: "aaabccdddda"

// Output: "3ab2c4da"

// a. Non-recursive solution

compressString = function stringCompression(str) {
    let output = ''
    let count = 0;
   for (index = 0; index < str.length; index++) {
    count++;
    if (str[index] != [str[index + 1]]) {
        output += count + str[index];
        count = 0;
    }
   }
   const finalOutput = output.replaceAll('1', '');
   return finalOutput;
}

// b. Recursive solution