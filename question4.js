// Question 4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. 
// You may not convert the string into an array or use array methods to solve this problem. 
// The algorithm should return a boolean.

// Example Input: "hello"

// Output: false

// Input: "copyright"

// Output: true


// Some sources say sets are not considered an array while others do - unsure
hasDuplicates = function(string){
    const uniqueString = new Set(string);
    return uniqueString.size === string.length;
}