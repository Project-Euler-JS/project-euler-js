function lexicographicPermutations(n) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = '';
    n = n - 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        
        let index = Math.floor(n / factorial);
        n = n % factorial;
        
        result += digits[index];
        digits.splice(index, 1);
    }
    
    return parseInt(result, 10); // Convert the result string to a number
}

// Tests
console.log(lexicographicPermutations(699999)); // 1938246570
console.log(lexicographicPermutations(899999)); // 2536987410
console.log(lexicographicPermutations(900000)); // 2537014689
console.log(lexicographicPermutations(999999)); // 2783915460