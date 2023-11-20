const slidingWindowLogic = (array, K) => {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        const element = array[windowEnd];
        windowSum += element;
        /**
         * we dont have to slide the window,
         * if the sliding window is less than k-1
         */
        if (windowEnd >= K - 1) {
            result.push(windowSum);
            // remove the un nessary value from the window sum
            windowSum -= array[windowStart];
            windowStart += 1; // slide the window
        }
    }
};
