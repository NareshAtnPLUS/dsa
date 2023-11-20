/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 const NUM_OF_ALPHABETS=26
 const FIRST_ALPHABET='a'
 var checkInclusion = function(target, source) {
     /**
     Base case: if the target string length is greater than
     source string length, then we cannot have a permutation
     **/    
     if(target.length > source.length) {
         return false
     }
     let windowStart = 0
     const {sourceFrequencyMap,targetFrequencyMap} = getFrequencyMap(target)
     for(let windowEnd = 0; windowEnd < source.length; windowEnd++) {
         addRightFrequency(source,windowEnd,sourceFrequencyMap)
         
         const windowSize = windowEnd - windowStart + 1
         const isPermutation = windowSize === target.length && isSame(sourceFrequencyMap,targetFrequencyMap)
         if(isPermutation) {
             return true
         }
         
         const canSlide = target.length <= windowSize
         if(canSlide) {
             subtractLeftFrequency(source,windowStart,sourceFrequencyMap)
             windowStart++;
         }
         
     }
     return false
     
     
 };
 const addRightFrequency = (source,windowEnd,frequencyMap) => {
     const char = source[windowEnd]
     const index = alphabetPosition(char)
     frequencyMap[index]++
     return frequencyMap[index]
 }
 const subtractLeftFrequency = (source,windowStart,frequencyMap) => {
     const char = source[windowStart]
     const index = alphabetPosition(char)
     frequencyMap[index]--;
     return frequencyMap[index]
 }
 const isSame = (sourceFrequencyMap,targetFrequencyMap) => {
     for(let index = 0; index < NUM_OF_ALPHABETS; index++) {
         const isMatch= sourceFrequencyMap[index] === targetFrequencyMap[index]
         if(!isMatch) {
             return false
         }
     }
     return true
 }
 const alphabetPosition = (char) => char.charCodeAt(0) - FIRST_ALPHABET.charCodeAt(0)
 const getFrequencyMap = (targetString) => {
     const [sourceFrequencyMap,targetFrequencyMap] = new Array(2).fill().map(()=> new Array(NUM_OF_ALPHABETS).fill(0))
     for(let char of targetString) {
         targetFrequencyMap[alphabetPosition(char)]++
     }
     return {sourceFrequencyMap,targetFrequencyMap}
 }
 console.log(checkInclusion('ab', 'eidbaooo'));