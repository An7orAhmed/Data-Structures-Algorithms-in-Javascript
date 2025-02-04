function findKthSmallest(arr, k) {
    const minVal = Math.min(...arr);
    if (minVal < 1) {
        // আমাদের বাইনারি ইনডেক্সড ট্রির সূচীগুলি নেতিবাচক হতে পারে না, তাই আমরা সমস্ত মানকে সরাসরি সামঞ্জস্যপূর্ণ করি
        const offset = Math.abs(minVal);
        const resizedArr = arr.map(num => num + offset);
        return findKthSmallestHelper(resizedArr, k) - offset;
    }
    return findKthSmallestHelper(arr, k);
}

function findKthSmallestHelper(arr, k) {
    const n = arr.length;
    const BIT = new BinaryIndexedTree(arr);
    
    for (let i = 0; i < n; i++) {
        BIT.update(arr[i], 1);
        if (BIT.query(arr[i]) === k) {
            return arr[i];
        }
    }
    
    return -1; // কিছু ভুল হয়েছে
}

class BinaryIndexedTree {
    constructor(data) {
        this.size = data.length;
        this.tree = new Array(this.size + 1).fill(0);
        for (let num of data) {
            this.update(num, 1);
        }
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

