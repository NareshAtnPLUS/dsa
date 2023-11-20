def canConstruct(target,wordBank,memo={}):
  #Memoize
  if(target in memo):return memo[target]
  #Base cases
  if(target == ''):return True
  for word in wordBank:
    #make sure is a prefix as planned
    # print(word,target)
    if(word in target and target.index(word) == 0):
      suffix = target[len(word):]
      # print(suffix)
      if canConstruct(suffix,wordBank):
        memo[target] = True
        return memo[target]
  memo[target] = False
  return memo[target]



print(canConstruct("abcdef",["ab","abc","cd","def","abcd"],{}))
print(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","board"],{}))
print(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"],{}))
print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeee","eeeee"],{}))