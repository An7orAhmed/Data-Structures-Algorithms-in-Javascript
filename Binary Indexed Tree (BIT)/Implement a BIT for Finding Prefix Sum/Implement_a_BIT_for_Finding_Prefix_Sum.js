class BIT {
    constructor(size) {
        this.n = size;
        this.tree = new Array(this.n + 1).fill(0);
    }

    update(index, value) {
        while (index <= this.n) {
            this.tree[index] += value;
            index += index & -index;
        }
    }

    getPrefixSum(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

function findPrefixSum() {
    // একটি উদাহরণ অ্যারে তৈরি করা হলো
    const arr = [3, 1, 2, 4];
    const bit = new BIT(4);

    // BIT-এ ডেটা আডেট করা হলো
    bit.update(1, arr[0]);
    bit.update(2, arr[1]);
    bit.update(3, arr[2]);
    bit.update(4, arr[3]);

    // প্রথম 3 উপাদানের প্রিফিক্স সমষ্টি খুঁজে পেতে
    const prefixSum = bit.getPrefixSum(3);
    return prefixSum;
}