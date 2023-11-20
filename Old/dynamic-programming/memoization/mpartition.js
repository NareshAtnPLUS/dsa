const getNumPartitions = (n, m) => {
  const find = (n, m, memo = {}) => {
    const key = `${n},${m}`;
    if (key in memo) {
      return memo[key];
    }
    if (n === 0) {
      return 1;
    }
    if (m === 0 || n < 0) {
      return 0;
    }
    const partition = find(n - m, m, memo) + find(n, m - 1, memo);
    memo[key] = partition;
    return partition;
  };
  return find(n, m);
};

console.log(getNumPartitions(4, 4));

console.log(getNumPartitions(5, 5));
console.log(getNumPartitions(9, 9));
console.log(getNumPartitions(10, 10));
console.log(getNumPartitions(200, 200));
console.log(getNumPartitions(500, 500));
