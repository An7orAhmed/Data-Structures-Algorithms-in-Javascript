
function spiralOrder(matrix) {
    let result = [];
    if (matrix.length === 0) return result;

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // বাঁ থেকে ডানের সারি (Top Row)
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // উপর থেকে নিচের কলাম (Right Column)
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // ডান থেকে বাঁয়ের সারি (Bottom Row), শর্ত চেক
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // নিচ থেকে উপরের কলাম (Left Column), শর্ত চেক
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}