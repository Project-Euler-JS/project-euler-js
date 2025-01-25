function longestCollatzSequence(limit) {
  let longestChain = 0;
  let numberWithLongestChain = 0;
  
  // Cache to store already calculated sequence lengths
  const cache = new Map();
  cache.set(1, 1); // Base case
  
  function getCollatzLength(n) {
    // If we've already calculated this number's sequence length, return it
    if (cache.has(n)) {
      return cache.get(n);
    }
    
    // Calculate next number in sequence
    const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    
    // Recursively get length of rest of sequence and add 1 for current number
    const length = 1 + getCollatzLength(next);
    
    // Cache the result
    cache.set(n, length);
    return length;
  }
  
  // Check each number up to limit
  for (let i = 1; i < limit; i++) {
    const chainLength = getCollatzLength(i);
    if (chainLength > longestChain) {
      longestChain = chainLength;
      numberWithLongestChain = i;
    }
  }
  
  return numberWithLongestChain;
}