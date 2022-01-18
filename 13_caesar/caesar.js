const caesar = function(word, num) {
    let code;
    let codeToString;
    let upperCaseStart = 65; // A
    let upperCaseEnd = 90 // Z
    let lowerCaseStart = 97; // a
    let lowerCaseEnd = 122; // z
    let finalWord = '';

    for(let i = 0; i < word.length; i++){
        code = word[i].charCodeAt(0);
        console.log(code);
        // checks if the code # is between 65 & 90 
        if (code >= upperCaseStart && code <= upperCaseEnd){
            code += num;
            // if code number is greater than 90 the number is set equal to 90 - itself
            if (code > upperCaseEnd){
                code -= upperCaseEnd;
                // the number is then added to the start of upper case letters and added - 1 so that it 
                // equals the correct value
                code += upperCaseStart - 1;
            }
            else if (code < upperCaseStart){
                code -= upperCaseStart;
                code += upperCaseEnd + 1;
            }
            // codeToString formats the number into the string unicode value
            // finalWord concatonates the strings together.
            codeToString = String.fromCharCode(code);
            finalWord = finalWord.concat(codeToString);
        }
        // same as code above except with lower case letters
        else if (code >= lowerCaseStart && code <= lowerCaseEnd){
            code += num;
            codeToString = String.fromCharCode(code);
            finalWord = finalWord.concat(codeToString);
        }
        // checks if there is any punctuation and keeps it the same and adds it to the string
        else if (code < upperCaseStart || code > upperCaseEnd || code < lowerCaseStart || code > lowerCaseEnd){
            codeToString = String.fromCharCode(code);
            finalWord = finalWord.concat(codeToString);
        }
    }
    // return finalWord;
    console.log(finalWord);
    
};

caesar('Hello, World!', 75);

/*
        if(code > 65 && code <= 90){
            reset = 90 - word[i].charCodeAt(0);
            num -= reset;
            upperCaseStart += num;
            codeToString = String.fromCharCode(upperCaseStart);
            finalWord = finalWord.concat(codeToString);
        }
        // tracks if unicode letters goes passed z and resets it to a and adds based on 1 unicode value before a
        else if(code > 90 && code > 122){
            reset = 122 - word[i].charCodeAt(0);
            num -= reset;
            lowerCaseStart += num;
            codeToString = String.fromCharCode(lowerCaseStart);
            finalWord = finalWord.concat(codeToString);
            console.log(codeToString);
        }
        else {
            codeToString = String.fromCharCode(code);
            finalWord = finalWord.concat(codeToString);
        }
*/

// Do not edit below this line
module.exports = caesar;
