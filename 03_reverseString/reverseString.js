const reverseString = function(str) {
    str = [str]
    let s = []
    for (let i = 0; i < str.length; i++){
        str[i].split();
        // created a new array that splits the letters by spacing, reverses the order, then joins them back together
        s = str[i].split('').reverse().join('');
    }
   return s;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
