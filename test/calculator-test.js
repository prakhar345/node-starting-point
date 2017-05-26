var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {
  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });
   describe('subtract', function() {
    it('should return 3 when inputs are 6,3', function() {
      assert.equal(3, Calculator.subtract(6,3));
    });
  });
   describe('multiply', function() {
    it('should return 9 when inputs are 3,3', function() {
      assert.equal(9, Calculator.multiply(3,3));
    });
  });
   describe('divide', function() {
    it('should return 3 when inputs are 9,3', function() {
      assert.equal(3, Calculator.divide(9,3));
    });
    it('should return Infinity when inputs are 9,0', function() {
	    assert.equal("Infinity", Calculator.divide(9,0));
    });
    it('Cannot be performed', function() {
	    assert.equal("Can't Perform", Calculator.divide(0,0));
    });
  });
});
