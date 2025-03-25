function maximumPathSumI(triangle) {
  // Create a copy of the triangle to store maximum sums
  const maxSums = triangle.map(row => [...row]);
  
  // Start from second-to-last row and work upwards
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // For each position, choose maximum of two possible paths below
      maxSums[row][col] += Math.max(
        maxSums[row + 1][col],     // path going down
        maxSums[row + 1][col + 1]  // path going down-right
      );
    }
  }
  
  // Return value at top of triangle
  return maxSums[0][0];
}