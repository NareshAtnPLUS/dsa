/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  const n = cost.length
  const ways = [1,2]
  const calculate = (n,memo={})=>{
      if(n<0){ return 0;}
      if(n === 0){ return cost[n] }
      let minCost = 0;
      for (const way of ways) {
          const costCalculated = calculate(n-way,memo) + cost[n-way]
          
          if(minCost === 0){
              minCost = costCalculated
          }
          if(costCalculated < minCost){
              minCost = costCalculated
          }
      }
      console.log(`minCost,n ${minCost},${n}`)
      return minCost
  }
  return calculate(n)
  
};
minCostClimbingStairs([10,15,20])