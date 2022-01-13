const palindromes = function (string) {

    // takes the string and turns it to lowercase and gets rid of all punctuation
    let first = string.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');

    // takes the string and reverses it and removes all punctuation
    let diff = string.split('').reverse().join('');
    let strReplace = diff.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');

    // checks if the reversed string is the same or different from the original
    if(strReplace != first){
        console.log(false);
        return false;
    } else {
        return true;
    }
};


// Do not edit below this line
module.exports = palindromes;
