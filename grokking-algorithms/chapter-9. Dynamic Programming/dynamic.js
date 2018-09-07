import { createMatrix } from '../../utils/index.js';

export default (word1, word2) => {
  const matrix = createMatrix(word1.length, word2.length);
  let acc = 0;
  let index = 0;

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        matrix[i][j] = ++acc;
        index = i;
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return word1.slice(index - acc + 1, index + 1);
};
