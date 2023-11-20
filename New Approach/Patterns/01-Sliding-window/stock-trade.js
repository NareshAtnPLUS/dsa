/**
 * Two pointer stock profit solution
 * @param {Array} prices
 */
const stockTrade = (prices) => {
    /**
     * left is buying and right is selling
     */
    let left = 0,
        maxProfit = 0;
    for (let right = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else if (prices[left] >= prices[right]) {
            /**
             * if the prices of left is greater than or equal to prices[right],
             * then we have found a lowest price point we want to buy at that point
             * so update the buy or left pointer to the current right pointer
             */
            left = right;
        }
    }
    return maxProfit;
};
console.log(stockTrade());
/**
 * Example array = [7,1,5,3,6,4]
 * the technique used to solve this problem is two pointers
 * the left pointer here is day 1 - buy pointer
 * the right pointer here is day 2 - sell pointer
 * L => buy
 * R => sell
 * intialize left pointer in day 1 and right pointer on day 2
 * current profit = right - left;
 * since the right value is less than left, we're going to update the pointer on left
 * so left will be on day 2, and right is going to be on day 3
 * now we see, the right value (5) is actually greater than the left value (1).
 * then compute the current max profit right - left => 5 -1 = 4
 * since we are buying low and selling high, that means we can leave the left pointer,
 * we have to update only the right pointer and try we can get even more profit.
 * now again compare, 3 - 1 => 2 (profit)
 * so maxProfit is not updated, but update the right pointer.
 * since we buying low and selling high only right pointer is updated
 * now again compare the profit 6 - 1 = 5 (profit)
 * update maxProfit with the new maxProfit
 *
 * Take aways,
 * update left pointer when we are buying high and selling low
 * update the right pointer when we are buying low and selling high
 * compute and update maxProfit.
 * Memory complexity O(1)
 * Time complexity O(n)
 */
