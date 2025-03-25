function nthPrime(n) {
    let primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes[n - 1]; // n is 1-based, so subtract 1 to get the correct index.
  }
  
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  