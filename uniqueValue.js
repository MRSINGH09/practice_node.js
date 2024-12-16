// findUnique([1, 2, 2, 3, 4, 4, 5])

function findUnique(arr) {
  const resultArr = arr.reduce((acc, elem) => {
    if (!acc.includes(elem)) acc.push(elem);
    return acc;
  }, []);
  return resultArr;
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
