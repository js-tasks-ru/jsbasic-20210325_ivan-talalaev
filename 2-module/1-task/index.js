function sumSalary(salaries) {
  let sum = 0;
  for (let money in salaries) {
    let keys = salaries[money];
    if (Number.isInteger(keys)) {
      sum += keys;
    }
  }
  return sum;
}
