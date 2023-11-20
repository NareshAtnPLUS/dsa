const experiment = (n) => {
  const arr = Array(n)
    .fill()
    .map((n, idx) => Array(idx + 1).fill(idx));
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
  }
};
experiment(4);
