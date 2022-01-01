const removeFromArray = function(arr) {
    /* Use the rem variable as the argument that removes whichever
    number is inputted to remove that same number from the arr variable */

    // "arguments" is an object that can be used to call any value that's called on a function  

    for(let i = 1; i < arguments.length; i++){
        // arr is = to [1,2,3,4] 
        // arr.filter filters using item as a function that says if item is not == to the arguments given, then display all that is not == to the arguments
        arr = arr.filter(item => item !== arguments[i])
    }
    return arr;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
