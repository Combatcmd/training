// count
export const count = (list) => {
  if (list.length === 0) {
    return 0;
  }
  list.shift();
  return 1 + count(list);
};

// factorial
export const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// sum
export const sum = (list) => {
  if (list.length <= 1) {
    return list[0];
  }

  return list.shift() + sum(list);
};
