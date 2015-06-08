function calculate(number) {

  if(typeof number !== 'number') {

    return "Algorithm must take a number."
  };

  var sum = 0;

  for(var i = 1;i<=number;i++) {

    sum += Math.sqrt(i);
  };

  return sum;
};

module.exports = {

  calculate: calculate
};