const { expect } = require('chai');

const toHexadecimal = require('../lib/toHexadecimal.js');

describe('toHexadecimal', function () {

  it('should accurately convert decimal-based numbers from 0-256 to hexadecimal numbers', function () {

    expect(toHexadecimal(0)).to.equal('0')
    expect(toHexadecimal(10)).to.equal('a')
    expect(toHexadecimal(11)).to.equal('b')
    expect(toHexadecimal(12)).to.equal('c')
    expect(toHexadecimal(13)).to.equal('d')
    expect(toHexadecimal(14)).to.equal('e')
    expect(toHexadecimal(15)).to.equal('f')
    expect(toHexadecimal(16)).to.equal('10')
    expect(toHexadecimal(17)).to.equal('11')
    expect(toHexadecimal(18)).to.equal('12')
    expect(toHexadecimal(19)).to.equal('13')
    expect(toHexadecimal(20)).to.equal('14')
    expect(toHexadecimal(30)).to.equal('1e')
    expect(toHexadecimal(31)).to.equal('1f')
    expect(toHexadecimal(32)).to.equal('20')
    expect(toHexadecimal(160)).to.equal('a0')
    expect(toHexadecimal(256)).to.equal('100')
    
  });

  it('should handle conversion of large numbers to hexadecimal', function() {
    expect(toHexadecimal(100000)).to.equal('186a0');
    expect(toHexadecimal(1000000)).to.equal('f4240');
  });

  it('should have the same output as toString(16)', function () {
    expect(toHexadecimal(10000000)).to.equal((10000000).toString(16));
    expect(toHexadecimal(727427427)).to.equal((727427427).toString(16));
    expect(toHexadecimal(8625722)).to.equal((8625722).toString(16));
    expect(toHexadecimal(2658282266)).to.equal((2658282266).toString(16));
  });
});