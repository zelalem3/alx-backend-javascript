const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('should round floats', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
    assert.strictEqual(calculateNumber(1.4, -4.5), -3);
  });
