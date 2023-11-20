class Algorithms:
  @staticmethod
  def binarySearch(arr,target):
    low,high = 0,len(arr)-1
    while(low<=high):
      mid = (low + high)//2
      value = arr[mid]
      if(value == target):
        return mid
      elif(value < target):
        low = mid + 1
      elif(value > target):
        high = mid - 1
    return -1
    

algos = Algorithms()
index = algos.binarySearch([1,2,3,4,5,6,7,8,9],7)
print(index)