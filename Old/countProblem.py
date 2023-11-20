def climbStairs(n: int,memo={}) -> int:
  if n in memo:return memo[n]
  if n == 1 or n == 0:return 1;
  if n < 0:return 0;
  totalCount = 0
  for i in [1,2]:
      # print(n-i)            
      num_ways = climbStairs(n - i,memo)
      # print(num_ways)
      totalCount += num_ways
  memo[n] = totalCount
  return memo[n]
print(climbStairs(2))
print(climbStairs(3))
        
        