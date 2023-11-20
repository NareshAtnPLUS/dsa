/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
  const sortAscending = (first,second)=> first>second?1:-1
  const frequency = {}
  for(const element of nums){
    if(frequency[element]) {
      frequency[element] += 1
    } else {
      frequency[element] = 1
    }
  }

  const getMaxEarn = (idx,nums,memo={}) => {
    
    
    if (idx in memo) {	
      // console.log(memo[idx],memo	)		
      return memo[idx]
    }
    if (idx === 0){
      return frequency[nums[idx]]*nums[idx]
    }
    if(idx < 0) {
      return 0
    }
    let choice1 = 0
    const currentNumber = nums[idx]
    if(currentNumber !== nums[idx-1] +1 ){
      choice1 = frequency[currentNumber]* currentNumber + getMaxEarn(idx-1,nums,memo)
    } else {
      choice1 = frequency[currentNumber]* currentNumber + getMaxEarn(idx-2,nums,memo)
    }  
    const choice2 = getMaxEarn(idx-1,nums,memo)
    const concluded_choice = Math.max(choice1,choice2)
    // console.log(`choices - ${idx}`,choice1,choice2)
    memo[idx] = concluded_choice
    
    return concluded_choice
  }
  const uniqueNumbers = [...new Set(nums)]
  uniqueNumbers.sort(sortAscending)
  const n = uniqueNumbers.length -1  
  const ans = getMaxEarn(n,uniqueNumbers)

  return ans
  
};
console.log(deleteAndEarn([2,2,3,3,3,4]))