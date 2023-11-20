const getSumOfNaturalNumbers = (n) => {
  const sum = (n) => {
    if (n === 1) {
      return 1;
    }
    const sumOfNaturalNumbers = n + sum(n - 1);
    return sumOfNaturalNumbers;
  };
  return sum(n);
};

console.log(getSumOfNaturalNumbers(5));
console.log(getSumOfNaturalNumbers(6));
console.log(getSumOfNaturalNumbers(10));
console.log(getSumOfNaturalNumbers(9660));
