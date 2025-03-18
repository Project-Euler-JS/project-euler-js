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
    
    return Number(result);
}

// Tests
console.log(lexicographicPermutations(699999)); // 1938246570
console.log(lexicographicPermutations(899999)); // 2536987410
console.log(lexicographicPermutations(900000)); // 2537014689
console.log(lexicographicPermutations(999999)); // 2783915460

/* I get some issues
Passed: 1. lexicographicPermutations(699999) should return a number.
Failed: 2. lexicographicPermutations(699999) should return 1938246570.
Failed: 3. lexicographicPermutations(899999) should return 2536987410.
Failed: 4. lexicographicPermutations(900000) should return 2537014689.
Failed: 5. lexicographicPermutations(999999) should return 2783915460.

 */
