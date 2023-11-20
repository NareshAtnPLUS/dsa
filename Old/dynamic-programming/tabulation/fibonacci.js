/**
 * Tabulation method
 * @param {number} n
 */
const fibonacciFinder = (n) => {
  const fibonacci = (n) => {
    /**
     * dp table
     */
    const dp = new Array(n + 1).fill(0);
    // base case or seed value
    dp[1] = 1;
    for (let idx = 0; idx <= n; idx++) {
      dp[idx + 1] += dp[idx];
      dp[idx + 2] += dp[idx];
    }
    return dp[n];
  };
  return fibonacci(n);
};
/**
 * Tabulation Recipe
 * visualize the problem as a table
 * size of the table based on the inputs
 * intialize the table with default values
 * seed the trivial answer into the table
 * iterate through the table
 * fill further positions based on the current position
 */
console.log(fibonacciFinder(6));
console.log(fibonacciFinder(8));
console.log(fibonacciFinder(100));
