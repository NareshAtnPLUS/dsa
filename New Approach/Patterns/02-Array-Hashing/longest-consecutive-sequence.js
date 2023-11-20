const longestConsecutive = function (nums) {
    const numsSet = new Set(nums);
    let longest = 0;
    for (let num of numsSet) {
        /**
         * check if the num has previous number in the num set, then it will be
         * a consecutive number of 1
         */
        if (!numsSet.has(num - 1)) {
            let currentMax = 1,
                currentNum = num;
            // then check the consecutive increament numbers in the set
            // if available then increament the currentMax and the currentNum
            while (numsSet.has(currentNum + 1)) {
                currentMax++;
                currentNum++;
            }
            // find out the longest with existing longest and the current longest
            longest = Math.max(longest, currentMax);
        }
    }
    return longest;
};
