const { expect } = require('chai');

const toBinary = require('../lib/toBinary.js');

describe('toBinary', function () {

  it('should accurately convert decimal-based numbers from 0-16 to binary numbers', function () {
    expect(toBinary(0)).to.equal('0')
    expect(toBinary(1)).to.equal('1')
    expect(toBinary(2)).to.equal('10')
    expect(toBinary(3)).to.equal('11')
    expect(toBinary(4)).to.equal('100')
    expect(toBinary(5)).to.equal('101')
    expect(toBinary(6)).to.equal('110')
    expect(toBinary(7)).to.equal('111')
    expect(toBinary(8)).to.equal('1000')
    expect(toBinary(9)).to.equal('1001')
    expect(toBinary(10)).to.equal('1010')
    expect(toBinary(11)).to.equal('1011')
    expect(toBinary(12)).to.equal('1100')
    expect(toBinary(13)).to.equal('1101')
    expect(toBinary(14)).to.equal('1110')
    expect(toBinary(15)).to.equal('1111')
    expect(toBinary(16)).to.equal('10000')
    
  });

  it('should handle conversion of large numbers to binary', function() {
    // console.log('toBinary', toBinary(1000000))
    // console.log('toString', (1000000).toString(2))
    expect(toBinary(1000000)).to.equal(('11110100001001000000').toString(2));
  });
});