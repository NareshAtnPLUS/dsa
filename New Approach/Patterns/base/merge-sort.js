const mergeSort = (nums) => {
    const _mergeSort = (nums, left, right) => {
        if (left < right) {
            const mid = Math.round((left + right) / 2);
            _mergeSort(nums, left, mid);
            _mergeSort(nums, mid, right);
        }
        return;
    };
    /**
     *
     * @param {Array} arr
     * @param {number} left
     * @param {number} mid
     * @param {number} right
     */
    const merge = (arr, left, mid, right) => {
        const leftArr = arr.slice(left, mid - left + 1);
        const rightArr = arr.slice(mid);
    };
};
