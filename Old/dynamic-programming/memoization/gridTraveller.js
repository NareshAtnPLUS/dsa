const gridTraveler = (n, m) => {
  const find = (n, m, memo = {}) => {
    const key = `${n},${m}`;
    if (key in memo) {
      return memo[key];
    }
    if (n === 1 || m === 1) {
      return 1;
    }
    if (n === 0 || m === 0) {
      return 0;
    }
    const ways = find(n - 1, m, memo) + find(n, m - 1, memo);
    memo[key] = ways;
    return ways;
  };
  return find(n, m);
};

console.log(gridTraveler(4, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(10, 10));
