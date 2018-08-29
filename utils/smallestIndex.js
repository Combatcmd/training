export default (list) => {
  let smallest = list[0];
  let smallestIndex = 0;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] < smallest) {
      smallest = list[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};
