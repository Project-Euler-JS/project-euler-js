function specialPythagoreanTriplet(n) {
    for (let a = 1; a < n / 3; a++) { // a must be less than n/3 to leave room for b and c
      for (let b = a + 1; b < n / 2; b++) { // b must be less than n/2
        let c = n - a - b;
        if (a * a + b * b === c * c) {
          return a * b * c;
        }
      }
    }
  }
  
  
  specialPythagoreanTriplet(1000);