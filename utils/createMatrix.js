export default (rows, cols) => {
  const matrix = new Array(rows);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols).fill(0);
  }

  return matrix;
};
