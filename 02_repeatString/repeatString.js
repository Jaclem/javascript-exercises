const repeatString = function(string, num) {
    let s = '';
    string = string.split(',');
    num = num;

    if(num < 0){
        return "ERROR";
    }
    else {
        for (let i = 0; i < num; i++){
            s += string;
        }
    }
    
    string.join('');
    return s;
};

repeatString('hey', 1);

// Do not edit below this line
module.exports = repeatString;
