const leapYears = function(years) {

    if(years % 10 === 0 && years % 400 === 0){
        return true;
    }
    else if(years % 10 === 0 && years % 400 !== 0){
        return false;
    }
    else if(years % 4 !== 0){
        return false;
    } 
    else {
        return true;
    }

};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
