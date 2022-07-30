// Question 1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

// Specialized function --> more functional programming in nature
turnStringIntoUrlV1 = function(string){
    const stringUrlTwin = string.split(' ').join('%20');
    return stringUrlTwin
}

// specialized function --> OOP in nature?
turnStringIntoUrlV2 = function(string){
    const stringUrlTwin = string.replaceAll(' ', '%20');
    return stringUrlTwin
}

// recursive solution --> functional programming oriented
turnStringIntoUrlV3 = function editString(string, target, replacement) {
    if (string.includes(target) === false){
        return string;
    }
    string = string.split(target).join(replacement);
    return editString(string, target, replacement);
};