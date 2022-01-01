const ftoc = function(temp) {
  // finalTemp takes temp and turns it into a decimal string
  let finalTemp = ((temp - 32) / 1.8).toFixed(1);
  // the Number function turns it back into a number to pass tests.
  return Number(finalTemp);
};

const ctof = function(temp) {
  let finalTemp = ((temp * 1.8) + 32).toFixed(1);
  return Number(finalTemp);
};

console.log(ftoc(100));
console.log(ctof(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
