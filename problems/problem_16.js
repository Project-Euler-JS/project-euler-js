function powerDigitSum(exponent) {
  // Start with 2^0 = 1
  let number = '1';
  
  // Multiply by 2, 'exponent' times
  for (let i = 0; i < exponent; i++) {
    let carry = 0;
    let result = '';
    
    // Multiply each digit by 2 from right to left
    for (let j = number.length - 1; j >= 0; j--) {
      let digit = parseInt(number[j]) * 2 + carry;
      carry = Math.floor(digit / 10);
      result = (digit % 10) + result;
    }
    
    // Add remaining carry if any
    if (carry > 0) {
      result = carry + result;
    }
    
    number = result;
  }
  
  // Sum all digits in final number
  return number.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}