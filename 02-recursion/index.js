// 01__카운트 재귀함수
const countDown = (num) => {
  if (num === 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};

const totalCount = countDown(5);
console.log(totalCount);

// 02__합계 재귀함수
const sumRange = (num) => {
  if (num === 1) return 1;

  console.log(num);
  return num + sumRange(num - 1);
};

const total = sumRange(5);
console.log(total);

// SumRange(5) + sumRange(4) wait...
// SumRange(4) + sumRange(3) wait...
// SumRange(3) + sumRange(2) wait...
// SumRange(2) + sumRange(1) wait...
// sumRange(1) => return 1; got it!

// sumRange(1) => return 1
// sumRange(2) => return 3
// sumRange(3) => return 6
// sumRange(4) => return 10
// sumRange(5) => return 15

// 03__팩토리얼 재귀함수
const factorial = (num) => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
};

const totalFatorial = factorial(1);
console.log(totalFatorial);

// 04__헬퍼 재귀함수
const collectOdds = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

const resultCollect = collectOdds([1, 3, 6, 8, 5]);
console.log(resultCollect);

// 05__순수 재귀함수
const collectOddValues = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
};

const resultOdds = collectOddValues([1, 2, 3, 4, 5]);
console.log(resultOdds);

// collectOddValues([1, 2, 3, 4, 5]);
// newArr = newArr.concat(collectOddValues(arr.slice(1)));
//  [1].concat(collectOddValues([2, 3, 4, 5])); [1,3,5]
//  [ ].concat(collectOddValues([3, 4, 5])); [3,5]
// [3].concat(collectOddValues([4, 5])); [3,5]
// [ ].concat(collectOddValues([5]))  [5]
// [5].concat(collectOddValues([ ])) [5]
// return collectOddValues = [ ]
