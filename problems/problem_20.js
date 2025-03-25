function sumFactorialDigits(n) {
  // Helper function to multiply string number by regular number
  function multiplyString(strNum, num) {
    let carry = 0;
    let result = '';
    
    // Multiply each digit from right to left
    for (let i = strNum.length - 1; i >= 0; i--) {
      let product = parseInt(strNum[i]) * num + carry;
      carry = Math.floor(product / 10);
      result = (product % 10) + result;
    }
    
    // Add remaining carry
    while (carry > 0) {
      result = (carry % 10) + result;
      carry = Math.floor(carry / 10);
    }
    
    return result;
  }
  
  // Calculate factorial using string arithmetic
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = multiplyString(result, i);
  }
  
  // Sum digits
  return result.split('')
               .reduce((sum, digit) => sum + parseInt(digit), 0);
}