function flattenArray(arr, resultArr = []) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattenArray(element, resultArr);
    } else {
      resultArr.push(element);
    }
  }
  return resultArr;
}

console.log(flattenArray([1, [2, [3, [4]]]]));

console.log(a);
let a = 10;
