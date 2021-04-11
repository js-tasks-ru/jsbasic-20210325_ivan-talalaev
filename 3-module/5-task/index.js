function getMinMax(str) {
  let splitArray = str.replace(/\s/g,',').split(',');
  let numArr = splitArray.filter(item => item > 0 || item < 0 );
  let result = {};
  result.min = Math.min(...numArr);
  result.max = Math.max(...numArr);
  return result;
}
