import sys
def sum(n):
  if n == 1:return 1
  natural_number_sum = n + sum(n-1)
  return natural_number_sum

sys.setrecursionlimit(5000)
print(sum(10))
print(sum(3000))

print(sys.getrecursionlimit())