// one application of toBinary -- find the number of digits that equal 1 in the 
// binary representation of a 10-decimal-based number argument.
// var countBits = function(n) {
//   return toBinary(n)
//     .toString()
//     .split('')
//     .reduce(((sum, number) => number === '1' ? sum + 1 : sum), 0)
// };

function toBinary(n, digit = 0, result = '') {
  if (n == 0) return '0';
  
  // each digit represents two to the power of its place.
  // we will test each digit by the following logic.
  let twoToThePowerOfDigit = Math.pow(2, digit);

  // if the number is less than twoToThePowerOfDigit,
  // then we just return the result since this binary digit
  // doesn't apply.
  if (n < twoToThePowerOfDigit) return result;
  
  // if n is divisible by twoToThePowerOfDigit
  // an even number of times, then prepend '0' to the result,
  // increment digit and pass those into our function recursively.
  if (Math.floor(n / twoToThePowerOfDigit) % 2 == 0) {
    return toBinary(n, digit + 1, '0' + result);
  }
  // if n is divisible by twoToThePowerOfDigit
  // an odd number of times, then prepend 1 to the
  // result, increment the digit and pass those
  // into our function recursively.
  return toBinary(n, digit + 1, '1' + result);
}

module.exports = toBinary;
/*
  1  2   3    4    5    6    7    8      9    10    11    12    13    14    15      16
  1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000
*/