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