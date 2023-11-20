def howSum(targetSum,numbers,memo={}):
  #memoize
  if(targetSum in memo):return memo[targetSum]
  # Base Cases
  if(targetSum == 0):return []
  if(targetSum < 0 ):return None

  # Branching Logic
  for number in numbers:
    remainder = targetSum - number
    remainderResult = howSum(remainder,numbers,memo)
    if(remainderResult != None):
      # print(remainderResult)
      remainderResult.append(number)
      # print(remainderResult)
      memo[targetSum] = remainderResult
      return memo[targetSum]
  memo[targetSum] = None
  return None


print(howSum(7,[2,3],{}))
print(howSum(7,[5,3,4,7],{}))
print(howSum(7,[2,4],{}))
print(howSum(8,[2,3,5],{}))
print(howSum(300,[7,14],{}))

