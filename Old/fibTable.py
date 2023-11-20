def fib(n):
  table = [0]*(n+1)
  table[1] = 1
  for i in range(1,len(table)+1):
    if i+1 < len(table):
      table[i+1] += table[i]
    if i+2 < len(table):
      table[i+2]+=table[i]
  return table[n]



print(fib(6))
print(fib(7))
print(fib(8))
print(fib(9))
print(fib(50))
