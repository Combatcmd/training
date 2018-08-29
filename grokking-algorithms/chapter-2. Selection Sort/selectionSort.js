import { smallestIndex } from '../../utils/index.js';

export default (list) => {
  let size = list.length;
  let newArr = [];
  for (let i = 0; i < size; i += 1) {
    let smallest = smallestIndex(list);
    newArr.push(list[smallest]);
    list.splice(smallest, 1);
  }

  return newArr;
};
