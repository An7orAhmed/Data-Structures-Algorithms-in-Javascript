
function rotate90(matrix) {
    const n = matrix.length;

    // ম্যাট্রিক্সটিকে ট্রান্সপোজ করুন
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // প্রতিটি সারিকে রিভার্স করুন
    for (let row of matrix) {
        row.reverse();
    }
}