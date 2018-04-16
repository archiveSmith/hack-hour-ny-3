/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  for (var i = 0; i < n; i++) {
    let k = n
    while (k > 0) {
      grid.push(grid[k-1][i])
      k--
    }
    grid.push((grid.slice(n+i)))
    grid.splice(n+i, n)
  }
  grid.splice(0, n)
  return grid
}

module.exports = rotateGrid;
