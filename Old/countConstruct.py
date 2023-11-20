def countConstruct(target,wordBank,memo={}):
  if(target in memo):return memo[target]
  if target == '':return 1

  totalCount = 0
  # word in wordbank are the vertices of the tree
  for word in wordBank:
    # prefix condition
    if(word in target and target.index(word) == 0):
      suffix = target[len(word):]
      numWaysForRest = countConstruct(suffix,wordBank,memo)
      totalCount+=numWaysForRest
  memo[target] = totalCount
  return memo[target]


print(countConstruct('purple',['purp','p','ur','le','purpl']))
# print(countConstruct("abcdef",["ab","abc","cd","def","abcd"]))
# print(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
# print(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
# print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeee","eeeee"]))
print(countConstruct("abcdef",["ab","abc","cd","def","abcd"]))
print(countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
print(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))
print(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeee","eeeee"]))