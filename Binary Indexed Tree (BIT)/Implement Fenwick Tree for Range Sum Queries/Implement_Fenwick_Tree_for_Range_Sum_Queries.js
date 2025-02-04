class FenwickTree {
    constructor(size) {
        this.n = size;
        this.tree = new Array(this.n + 1).fill(0);
    }

    update(index, value) {
        // Update the Fenwick Tree at the given index
        while (index <= this.n) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    getSum(index) {
        // Calculate the prefix sum up to the given index
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

function rangeSumQuery(tree, start, end) {
    // Calculate the sum from index 'start' to 'end'
    if (start === 1) {
        return tree.getSum(end);
    } else {
        return tree.getSum(end) - tree.getSum(start - 1);
    }
}