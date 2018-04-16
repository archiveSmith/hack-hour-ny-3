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
var rotate = function (arr) {
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let store = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = store;
        }
    }
};

module.exports = rotateGrid;
