class Solution:
  def wordBreak(self, target: str, wordBank,memo={}) -> bool:
    if target in memo:return memo[target]
    
    if target == '':return True
    
    for word in wordBank:
      print(word,target,word in target)
      if ((word in target) and (target.index(word) == 0)):
        suffix = target[len(word):]
        if self.wordBreak(suffix,wordBank,memo):
          memo[target] = True
          return True
    memo[target] = False
    return False
        
sol= Solution()
print(sol.wordBreak("a",["b"]))