var chai = require('chai');
var algorithm = require("../js/algorithm.js");

var should = chai.should();

describe('algorithm', function() {

  it('algorithm is a function', function() {

    algorithm.calculate.should.be.a('function');

  });

  it('algorithm must take a number', function() {

    algorithm.calculate('').should.be.a('string'); //expect error string, not number

  });

  it('algorithm should expect 75.73480078951178 on input 23', function() {

    algorithm.calculate(23).should.be.equal(75.73480078951178);

  });

  it('algorithm should expect 4.146264369941973 on input 3', function() {

    algorithm.calculate(3).should.be.equal(4.146264369941973);
  });

});