function factorial(n) {
    if (!Number.isInteger(n) || n < 0) return 1;  // NaN or negative returns 1
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  const num = Number(process.argv[2]);
  console.log(factorial(num));