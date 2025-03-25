function sumAmicableNum(n) {
  // Helper function to get sum of proper divisors
  function getDivisorsSum(num) {
    let sum = 1; // Start with 1 as it's always a proper divisor
    
    // Only need to check up to square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        // Add the pair divisor if it's different
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum;
  }
  
  let amicableSum = 0;
  
  // Check each number up to n
  for (let a = 2; a < n; a++) {
    let b = getDivisorsSum(a);
    // Only check if b is greater than a to avoid counting pairs twice
    if (b > a && b < n && getDivisorsSum(b) === a) {
      amicableSum += a + b;
    }
  }
  
  return amicableSum;
}