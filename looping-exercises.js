const range = function (start, end, step) {
  if (start === undefined || end === undefined || step === undefined) return [];
  if (start > end) return [];
  if (step <= 0) return [];

  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }

  return arr;
};

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

const lastIndexOf = function (arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) return i;
  }
  return -1;
};

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
// console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
// console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

const concat = function (arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
  }

  return arr;
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
