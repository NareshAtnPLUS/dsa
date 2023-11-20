const bestSum = (targetSum,numbers,memo={}) => {
  if(targetSum in memo) {
    return memo[targetSum];
  }
  if(targetSum === 0) {
    return [];
  }
  if(targetSum < 0){
    return null;
  }
  let shortestCombination = null;
  for(let number of numbers){
    const remainder = targetSum - number;
    const remainderCombination = bestSum(remainder,numbers,memo)
    if(remainderCombination !== null){
      const combination = [...remainderCombination,number]
      if(shortestCombination === null || (combination.length < shortestCombination.length)){
        shortestCombination = combination; 
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination

}


console.log(bestSum(8,[1,4,5]))