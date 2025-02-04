function Max(a, b) {
    return a > b ? a : b;
}

class BIT {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    update(i, val) {
        while(i <= this.size) {
            this.tree[i] += val;
            i += i & -i;
        }
    }

    getSum(i) {
        let sum = 0;
        while(i > 0) {
            sum += this.tree[i];
            i -= i & -i;
        }
        return sum;
    }
}

function findKthSmallest(arr, k) {
    if(k > arr.length || k === 0) return null;

    // Step 1: Coordinate Compression
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    const rank = {};
    for(let i = 0; i < sortedUnique.length; i++) {
        rank[sortedUnique[i]] = i + 1; // Ranks start from 1
    }

    // Step 2: Initialize BIT
    const bit = new BIT(sortedUnique.length);

    // Step 3: Update BIT with frequencies
    for(const num of arr) {
        const r = rank[num];
        bit.update(r, 1);
    }

    // Step 4: Binary Search to find Kth Smallest
    let low = Math.min(...arr);
    let high = Math.max(...arr);

    while(low <= high) {
        const mid = (low + high) / 2 | 0; // Ensure integer
        const midRank = rank[mid] || 0; // Handle if mid not found
        const cumsum = bit.getSum(midRank);

        if(cumsum < k) {
            low = mid + 1;
            k -= cumsum;
        } else {
            high = mid - 1;
        }
    }

    return low;
}