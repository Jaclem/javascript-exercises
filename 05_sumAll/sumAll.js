const { isString } = require("test/utils");

const sumAll = function(start, end) {
    let sum = 0;
    if (start > end){
        for(end = end; end <= start; end++){
            sum += end;
        }
    } 
    else if (start < 0 || end < 0){
        return "ERROR";
    } 
    else if (isString(start) || isString(end)){
        return "ERROR";
    }  
    else if (Array.isArray(end)){
        return "ERROR";
    }
    else {
        for(start = start; start <= end; start++){
            sum += start;
        }
    }
    
    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
