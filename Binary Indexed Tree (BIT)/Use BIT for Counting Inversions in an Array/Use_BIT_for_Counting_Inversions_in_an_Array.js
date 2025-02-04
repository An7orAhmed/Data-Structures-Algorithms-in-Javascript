Function for inversion count using BIT:

function countInversions(arr) {
    // Compress the array values to a smaller range
    const unique = [...new Set(arr)].sort((a, b) => a - b);
    const compressed = arr.map(x => unique.indexOf(x) + 1); // +1 for 1-based indexing

    class BIT {
        constructor(size) {
            this.size = size;
            this.tree = new Array(size + 1).fill(0);
        }

        update(index, value) {
            while (index <= this.size) {
                this.tree[index] += value;
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

    const bit = new BIT(compressed.length);
    let inversions = 0;

    // Traverse from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = compressed[i];
        // Count elements smaller than current that have been processed
        inversions += bit.query(current - 1);
        // Update BIT with current element
        bit.update(current, 1);
    }

    return inversions;
}

