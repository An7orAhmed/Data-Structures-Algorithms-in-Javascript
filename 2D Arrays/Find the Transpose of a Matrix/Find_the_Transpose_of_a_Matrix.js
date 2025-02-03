
function findTranspose(matrix) {
    const transpose = [];
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let j = 0; j < cols; j++) {
        transpose[j] = [];
        for (let i = 0; i < rows; i++) {
            transpose[j].push(matrix[i][j]);
        }
    }
    return transpose;
}

// উদাহরণ ব্যবহার
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("ট্রান্সপোজ:", findTranspose(originalMatrix));