function largestPrimeFactor(inputNumber) {

    // Copie du nombre d'origine à manipuler par division
    let currentNumber = inputNumber;
    let factor = 2;
    let largestPrimeFactorFound;

    // Continue à diviser tant que le nombre est supérieur à 1
    while (currentNumber > 1) {

        // Si le nombre est divisible par le facteur actuel, c'est un facteur premier
        if (currentNumber % factor === 0) {

            currentNumber /= factor; // Divise le nombre par le facteur premier actuel
            largestPrimeFactorFound = factor; // Met à jour le plus grand facteur premier trouvé jusqu'à présent

        } else {
            factor++; // Si le nombre n'est pas divisible, passe au facteur suivant
        }
    }

    return largestPrimeFactorFound;
}

largestPrimeFactor(13195); // Résultat attendu : 29
