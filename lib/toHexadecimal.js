let numbers = ['0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function toHexadecimal(n, digit = 0, result = '') {
  if (n == 0) return '0';
  
  // each digit represents sixteen to the power of its place.
  // we will test each digit by the following logic.
  let sixteenToThePowerOfDigit = Math.pow(16, digit);

  // if the number is less than sixteenToThePowerOfDigit,
  // then we just return the result since this binary digit
  // doesn't apply.
  if (n < sixteenToThePowerOfDigit) return result;
  
  let divisibilityFactor = Math.floor(n / sixteenToThePowerOfDigit) % 16;
  
  return toHexadecimal(n, digit + 1, numbers[divisibilityFactor] + result);
  // if ( == 0) {
  //   return toHexadecimal(n, digit + 1, '0' + result);
  // }
  
  // return toHexadecimal(n, digit + 1, '1' + result);
}

console.log('toHexadecimal(20)', toHexadecimal(20))

module.exports = toHexadecimal;