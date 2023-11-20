def bestSum(targetSum,numbers,memo={}):
  #memoize
  if(targetSum in memo):return memo[targetSum]
  #Base Case
  if(targetSum == 0):return []
  if(targetSum < 0):return None

  shortestCombination = None


  #Branching Logic
  for number in numbers:
    remainder = targetSum - number
    remainderCombination = bestSum(remainder,numbers,memo)
    # print(remainderCombination,remainder)
    if(remainderCombination != None):
      # remainderCombination.append(number)
      combination = [*remainderCombination,number] 
      # print(combination,remainderCombination)
      # if the combination is shorter than the current shortest  update it
      if(shortestCombination == None) or ((len(combination) < len(shortestCombination))):
        shortestCombination = combination

  memo[targetSum] = shortestCombination
  return shortestCombination





print(bestSum(7,[5,3,4,7],{}))
print(bestSum(8,[2,3,5],{}))
print(bestSum(8,[1,4,5],{}))
print(bestSum(100,[1,2,5,5,25],{}))

