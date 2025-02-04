class FenwickTree {
    constructor(size) {
        this.n = size;
        this.tree = new Array(this.n + 1).fill(0);
    }

    update(index, delta) {
        while (index <= this.n) {
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

function countInversions(arr) {
    // Coordinate compression
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    const map = new Map(sortedUnique.map((x, i) => [x, i + 1]));
    const compressed = arr.map(x => map.get(x));

    const max = compressed.length;
    const bit = new FenwickTree(max);

    let inversions = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = compressed[i];
        inversions += bit.query(current - 1);
        bit.update(current, 1);
    }

    return inversions;
}

// Example usage:
const arr = [3, 1, 4, 3, 2];
console.log("Number of inversions:", countInversions(arr));