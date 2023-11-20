def allConstruct(target,wordBank,memo={}):
  if target in memo:return memo[target]
  if target == '':return [[]]
  result = []
  for word in wordBank:
    if word in target and target.index(word) == 0:
      suffix = target[len(word):]
      suffixWays = allConstruct(suffix,wordBank,memo)
      targetWays = map(lambda x:[word,*x],suffixWays)
      result = [*result,*targetWays]
  memo[target] = result
  return result
       


print(allConstruct('purple',['purp','p','ur','le','purpl']))
print(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef','c']))
print(allConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
print(allConstruct('aaaaaaaaaaaaaaaaaaaaz',['a','aa','aaa','aaaa','aaaaa']))