function fiboEvenSum(n) {
    let cache = {};
    function fibo(n) {
        if (cache.hasOwnProperty(n)) {
            return cache[n];
        }
        if (n <= 1) {
            return n;
        }
        cache[n] = fibo(n - 1) + fibo(n - 2);
        return cache[n];
    }
    let fn = fibo(1);
    let tt = 0;
    let ix = 0;
    while (fn <= n) {
        if (fn % 2 == 0) tt += fn;
        fn = fibo(ix++);
    }
    return tt;
}

console.log(fiboEvenSum(2 ** 53));