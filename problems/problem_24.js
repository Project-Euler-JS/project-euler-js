

function lexicographicPermutation(n) {
    let initial = [0,1,2]
    const permutations = [initial.join('')];

    while(true) {

        //1. Find the largest x
        let x = -1;
        for(let i = 0; i<initial.length - 1; i++) {
            if(initial[i]<initial[i+1]) {
                x = i;
            }
        }

        //break

        if(x === -1) {
            break;
        }

        //2. Find the largest y
        let y = -1;
        for(let i = 0; i<initial.length; i++) {
            if(initial[i] < initial[y]) {
                y = i;
            }
        }


        //3. Swap
        const temp = initial[x];
        initial[x] = initial[y];
        initial[y] = temp;
        

        //4. Reverse
        initial = [...initial.slice(0, x ), ...initial.slice(x + 1).reverse()];
        permutations.push(initial.join(''));
    }

    // Good luck
    return permutations;
} 
console.log(lexicographicPermutation(999999));