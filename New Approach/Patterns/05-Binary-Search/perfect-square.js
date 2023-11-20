const isPerfectSquare = (target) => {
    const findMid = (left, right) => Math.trunc((left + right) / 2);
    let [left, right] = [0, target];
    while (left <= right) {
        const mid = findMid(left, right);
        if (mid * mid === target) {
            return true;
        } else if (target < mid * mid) {
            right = mid - 1;
        } else {
            // target is greater than mid * mid
            left = mid + 1;
        }
    }
    return false;
};
console.log(isPerfectSquare(49));
