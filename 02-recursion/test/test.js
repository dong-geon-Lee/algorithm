// test 1
const power = (num, exponents) => {
  return Math.pow(num, exponents);
};

const result = power(2, 3);
console.log(result);

// test 2
const factorial = (n) => {
  if (n === 1) return 1;

  return n * factorial(n - 1);
};

const result2 = factorial(6);
console.log(result2);

// test 3
const productOfArray = (arr) => {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
};

const result3 = productOfArray([1, 2, 3, 4, 5]);
console.log(result3);

// test 4
const recursiveRange = (n) => {
  let listSum = [];

  const helper = (number) => {
    let total = 0;

    for (let i = 1; i <= number; i++) {
      total += i;
    }

    return total;
  };

  listSum = helper(n);

  return listSum;
};

const result4 = recursiveRange(6);
console.log(result4);

// test 5
const fib = (num) => {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
  // fibo[0] = 0
  // fibo[1] = 1
  // fibo[2] = fiboX[0] + fiboY[1]
  //     1   =    0     +    1

  // fibo[3] = fiboX[1] + fiboY[2]
  //     2   =    1     +    1

  // fibo[4] = fiboX[2] + fiboY[3]
  //     3   =    1     +    2

  // fibo[5] = fiboX[3] + fiboY[4]
  //     5   =    2     +    3
};

const result5 = fib(2);
console.log(result5);
