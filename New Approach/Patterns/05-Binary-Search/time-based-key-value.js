class TimeMap {
    timeHashMap = {};
    /**
     *
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     */
    set(key, value, timestamp) {
        if (!this.timeHashMap[key]) {
            this.timeHashMap[key] = [];
        }
        this.timeHashMap[key].push({ value, timestamp });
    }
    findMid(left, right) {
        return Math.trunc((left + right) / 2);
    }
    get(key, timestamp) {
        let [value, bucket] = ['', this.timeHashMap[key] || []];
        let [left, right] = [0, bucket.length - 1];

        while (left <= right) {
            const mid = this.findMid(left, right);
            const { value: guessValue, timestamp: guessTimeStamp } =
                bucket[mid];

            if (guessTimeStamp <= timestamp) {
                value = guessValue;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return value;
    }
}
