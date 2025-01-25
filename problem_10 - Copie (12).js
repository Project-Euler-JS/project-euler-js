
function primeSummation(n) {
    if (n < 2) return 0; // There are no primes less than 2
    
    // Step 1: Create a boolean array to mark prime numbers
    let sieve = new Array(n).fill(true);  // Initially, assume all numbers are prime
    sieve[0] = sieve[1] = false;         // 0 and 1 are not prime numbers
    
    // Step 2: Apply the Sieve of Eratosthenes
    for (let i = 2; i * i < n; i++) {
      if (sieve[i]) {  // If the number is prime
        for (let j = i * i; j < n; j += i) {
          sieve[j] = false;  // Mark multiples of i as non-prime
        }
      }
    }
    
    // Step 3: Sum up all primes
    let sum = 0;
    for (let i = 2; i < n; i++) {
      if (sieve[i]) {
        sum += i;
      }
    }
    
    return sum;
  }
  console.log(primeSummation(17));      // Output: 41
  console.log(primeSummation(2001));    // Output: 277050
  console.log(primeSummation(140759));  // Output: 873608362
  console.log(primeSummation(2000000)); // Output: 142913828922
  