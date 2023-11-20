const generatePascalTriangle = (n) => {
  const generate = (n) => {
    const pascalTriangle = Array(n)
      .fill()
      .map((n, idx) => Array(idx + 1).fill(1));
    for (let i = 1; i < n - 1; i++) {
      const current = pascalTriangle[i];
      const next = pascalTriangle[i + 1];

      for (let j = 1; j < next.length - 1; j++) {
        const value = current[j - 1] + current[j];
        next[j] = value;
      }
    }
    return pascalTriangle;
  };
  const pascalTriangle = generate(n + 1);
  console.log(pascalTriangle);
  return pascalTriangle[n];
};

console.log(generatePascalTriangle(3));
