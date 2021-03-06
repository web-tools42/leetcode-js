/**
 * @param {number[][]} grid
 * @return {number}
 */
//  let minPathSum = function(grid) {
//     if(grid === null || grid.length === 0 || grid[0].length === 0){
//         return 0;
//     }

//      let dp = [[]];

//     dp[0][0] = grid[0][0];

//     for( let i = 1; i < grid.length; i++){
//         dp.push([]);
//         dp[i][0] = grid[i][0] + dp[i - 1][0];
//     }

//     for( let j = 1; j < grid[0].length; j++){
//         dp[0][j] = grid[0][j] + dp[0][j - 1];
//     }

//     for(i = 1; i < grid.length; i++){
//         for(j = 1; j < grid[i].length; j++){
//              let val1 = dp[i - 1][j];
//              let val2 = dp[i][j - 1];

//             dp[i][j] = Math.min(val1, val2) + grid[i][j];
//         }
//     }

//     return dp[dp.length - 1][dp[0].length - 1];
// }

/**
 * @param {number[][]} triangle
 * @return {number}
 */

// use only O(n) space
let minimumTotal = function (triangle) {
  let preResult = [];
  let rows = triangle.length;

  if (rows > 0) {
    preResult.push(triangle[0][0]);
  } else {
    return null;
  }

  for (let row = 1; row < rows; row++) {
    let curResult = [];

    for (let col = 0; col < triangle[row].length; col++) {
      let val;

      if (col === 0) {
        val = preResult[col];
      } else if (col === triangle[row].length - 1) {
        val = preResult[col - 1];
      } else {
        val = Math.min(preResult[col - 1], preResult[col]);
      }

      curResult[col] = triangle[row][col] + val;
    }

    preResult = curResult;
  }

  return Math.min.apply(null, preResult);
};
