function numberLetterCounts(limit) {
  // Word mappings
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  function numberToWords(num) {
    if (num === 0) return '';
    
    // Handle 1-19
    if (num < 20) return ones[num];
    
    // Handle 20-99
    if (num < 100) {
      return tens[Math.floor(num / 10)] + (num % 10 ? ones[num % 10] : '');
    }
    
    // Handle 100-999
    if (num < 1000) {
      let result = ones[Math.floor(num / 100)] + 'hundred';
      if (num % 100) {
        result += 'and' + numberToWords(num % 100);
      }
      return result;
    }
    
    // Handle 1000
    return 'onethousand';
  }
  
  // Count letters for all numbers up to limit
  let totalLetters = 0;
  for (let i = 1; i <= limit; i++) {
    totalLetters += numberToWords(i).length;
  }
  
  return totalLetters;
}