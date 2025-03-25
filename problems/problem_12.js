function divisibleTriangleNumber(n) {
  // Function to count divisors of a number
  function countDivisors(num) {
      let count = 0;
      for (let i = 1; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              if (i * i === num) {
                  count++;
              } else {
                  count += 2;
              }
          }
      }
      return count;
  }

  let triangleNum = 0;
  let index = 0;

  while (true) {
      index++;
      triangleNum = (index * (index + 1)) / 2;
      if (countDivisors(triangleNum) > n) {
          return triangleNum;
      }
  }
}

// Test cases
console.log(divisibleTriangleNumber(5));    // Should return 28
console.log(divisibleTriangleNumber(23));   // Should return 630
console.log(divisibleTriangleNumber(167));  // Should return 1385280
console.log(divisibleTriangleNumber(374));  // Should return 17907120
console.log(divisibleTriangleNumber(500));  // Should return 76576500