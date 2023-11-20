function getNFibonacciSequence(n: number) {
  /**
   * Fibonacci numbers are sequence of numbers.
   * where nth fibonacci number is the sum of its previous two numbers
   * so the formula for generating the fibonacci number is
   * fibonaaci(n) = fibonacci(n-1) + fibonacci(n-2)
   * Example of a fibonacci sequence is 0,1,1,2,3,5,8,.....
   * @param {number} n length of fibonacci numbers to be generated
   * @returns {Array} array of fibonacci numbers
   */
  const fibonacci = (n: number) => {
    if (n === 0) {
      return 0;
    }
    if (n <= 2) {
      return 1;
    }
    const fibonacciNumber = fibonacci(n - 1) + fibonacci(n - 2);
    return fibonacciNumber;
  };
}
