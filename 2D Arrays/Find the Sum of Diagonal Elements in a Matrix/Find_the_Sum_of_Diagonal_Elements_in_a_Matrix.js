function sumOfDiagonalElements(matrix) {
  let sum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
      sum += matrix[i][i]; // Primary diagonal
      sum += matrix[i][n - 1 - i]; // Secondary diagonal
  }

  // If the matrix has an odd size, subtract the middle element once
  // because it gets added twice (once in each diagonal)
  if (n % 2 !== 0) {
      const middleIndex = Math.floor(n / 2);
      sum -= matrix[middleIndex][middleIndex];
  }

  return sum;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Sum of diagonal elements:", sumOfDiagonalElements(matrix));