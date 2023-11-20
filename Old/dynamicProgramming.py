counter=0
def gridTraveler(m,n,memo={}):
  key = f'{m},{n}'  
  # print(key)
  # are the args in the memo
  if(key in memo):     
    return memo[key]  
  if(m == 1 and n == 1):return 1
  if(m == 1 or n == 0):return 0
  memo[key] = gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo)  
  return memo[key]


# print(gridTraveler(1,1))
# print(gridTraveler(2,3))
# print(gridTraveler(3,2))
# print(gridTraveler(3,3))
print(gridTraveler(18,18))
    
