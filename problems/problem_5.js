/**
 *    AUTOR: Jamer José Rebolledo Quiroz
 *   GITHUB: github.com/jamerrq
 * LINKEDIN: linkedin.com/in/jamerrq
 *
 */

let cachePrimes = { 1: false, 2: true, max: 2, primes: [2] };
function isPrime(num) {
    if (cachePrimes.hasOwnProperty(num)) {
        return cachePrimes[num];
    } else {
        if (cachePrimes.max >= parseInt(num / 2)) {
            for (let prime of cachePrimes.primes) {
                if (num % prime == 0) {
                    cachePrimes[num] = false;
                    return false;
                }
            }
            cachePrimes[num] = true;
            cachePrimes.max = Math.max(cachePrimes.max, num);
            cachePrimes.primes.push(num);
            return true;
        }
        let bool = true;
        for (let i = 2; i < num; ++i) {
            if (num % i == 0) {
                bool = false;
                cachePrimes[i] = true;
                cachePrimes.primes.push(i);
                cachePrimes.max = Math.max(cachePrimes.max, i);
                break;
            }
        }
        if (bool) {
            cachePrimes.max = Math.max(cachePrimes.max, num);
            cachePrimes.primes.push(num);
        }
        cachePrimes[num] = bool;
        return cachePrimes[num];
    }
}

function getDivs(num) {
    let divs = [];
    let accm = 1;
    for (let i = 2; i <= parseInt(num / 2); ++i) {
        if (num % i == 0 && isPrime(i)) {
            divs.push(i);
            accm *= i;
        }
        if (accm == num) break;
    }
    divs.push(num);
    return divs;
}

function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestMult(n) {
    let divs = {};
    let ans = 1;
    for (let i = 2; i <= n; ++i) {
        let subDivs = getDivs(i);
        for (let j = 0; j < subDivs.length; ++j) {
            if (!divs.hasOwnProperty(subDivs[j])) {
                ans = lcm(ans, subDivs[j]);
                divs[j] = 0;
            }
        }
    }
    return ans;
}

console.log(smallestMult(20));
console.log(getDivs(120));