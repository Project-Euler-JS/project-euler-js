function latticePaths(gridSize) {
  // Create a 2D array to store the number of paths for each position
  const grid = Array(gridSize + 1).fill().map(() => Array(gridSize + 1).fill(0));
  
  // Initialize the rightmost column and bottom row to 1
  // because there's only one way to reach the end from these positions
  for (let i = 0; i <= gridSize; i++) {
    grid[i][gridSize] = 1; // rightmost column
    grid[gridSize][i] = 1; // bottom row
  }
  
  // Fill the rest of the grid from bottom-right to top-left
  for (let i = gridSize - 1; i >= 0; i--) {
    for (let j = gridSize - 1; j >= 0; j--) {
      // Number of paths from current position is sum of paths from right and down
      grid[i][j] = grid[i + 1][j] + grid[i][j + 1];
    }
  }
  
  // Return the number of paths from top-left corner
  return grid[0][0];
}