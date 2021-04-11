function showSalary(users, age) {
  let filtering = users.filter((arr) => arr.age <= age);
  let clearArr = function (data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
      newArr.push(data[i].name + ", " + data[i].balance + "\n");
    }
    return newArr;
  };
  let clearLastN = clearArr(filtering).join(' ');
  let n = clearLastN.length;
  return clearLastN.slice(0, n - 1);
}
