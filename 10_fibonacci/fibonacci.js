const fibonacci = function(num) {
    let a = 1, b = 0, temp;

    while (num > 0){
        a += b; //      0+1=1
        temp = a; //    1
        b = temp; //    1
        num--;
        console.log(a, temp, b);
    }
    
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
