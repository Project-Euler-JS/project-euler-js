function sumOfNonAbundantNumbers(n) {
    // Function to get sum of proper divisors
    function getDivisorsSum(num) {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          sum += i;
        }
      }
      return sum;
    }
  
    // Get all abundant numbers up to n
    const abundantNums = [];
    for (let i = 1; i <= n; i++) {
      if (getDivisorsSum(i) > i) {
        abundantNums.push(i);
      }
    }
  
    // Create a boolean array to mark numbers that can be written as sum of two abundant numbers
    const isSumOfAbundant = new Array(n + 1).fill(false);
    
    // Mark all numbers that can be written as sum of two abundant numbers
    for (let i = 0; i < abundantNums.length; i++) {
      for (let j = i; j < abundantNums.length; j++) {
        const sum = abundantNums[i] + abundantNums[j];
        if (sum <= n) {
          isSumOfAbundant[sum] = true;
        }
      }
    }
  
    // Sum up all numbers that cannot be written as sum of two abundant numbers
    let result = 0;
    for (let i = 1; i <= n; i++) {
      if (!isSumOfAbundant[i]) {
        result += i;
      }
    }
  
    return result;
  }