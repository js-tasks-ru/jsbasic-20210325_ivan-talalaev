function factorial(n) {
  let x = n;
  if (x == 0) {
    return 1;
  }
  for (let i = n - 1; i > 1; --i) {
    x = x * i;
  }
  return x;
}
