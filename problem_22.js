function namesScores(arr) {
    // Make sure we're working with a copy of the array and clean the names
    const cleanNames = arr.map(name => name.replace(/"/g, ''));
    
    // Sort the array alphabetically
    cleanNames.sort();
    
    // Function to calculate the alphabetical value of a name
    function getNameValue(name) {
      return name
        .toUpperCase() // ensure uppercase
        .split('')
        .reduce((sum, char) => sum + (char.charCodeAt(0) - 64), 0);
    }
    
    // Calculate total score
    const totalScore = cleanNames.reduce((sum, name, index) => {
      const nameValue = getNameValue(name);
      const position = index + 1;
      return sum + (nameValue * position);
    }, 0);
  
    return totalScore;
  }
  
  // Test cases
  const test1 = ["THIS", "IS", "ONLY", "A", "TEST"];
  const test2 = ["I", "REPEAT", "THIS", "IS", "ONLY", "A", "TEST"];