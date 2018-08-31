const quickSort = (list) => {
  if (list.length < 2) {
    return list;
  }

  const pivot = list[0];
  let less = [];
  let greater = [];

  for (let i = 1; i < list.length; i += 1) {
    if (list[i] <= pivot) {
      less.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater));
};

export default quickSort;
