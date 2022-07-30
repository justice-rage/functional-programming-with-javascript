// Question 2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. 
// Once you have solved the problem, demonstrate how it can be solved with filter(). 
// Solve the problem with and without recursion.

// Example Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

// a. Non-filter function solution

removeDuplicateV1 = function(array){
    const uniqueArray = Array.from(new Set(array));
    return uniqueArray;
}

// b. Filter function solution

removeDuplicateV2 = function(array) {
    const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
    return uniqueArray;
}

// c. Recursive solution - work in progress

// copy array into new array variable
// go through index and add to new array variable
removeDuplicateV3 = function makeUniqueSet(array) {
    if (array.length !== new Set(array).length) {
        return array;
    }
    array = Array.from(new Set(array));
    return makeUniqueSet(array);
}