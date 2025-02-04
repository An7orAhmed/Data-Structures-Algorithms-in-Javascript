# Implement_Fenwick_Tree_for_Range_Sum_Queries

**Author**: Antor Ahmed


প্রিয় পাঠক বন্ধুরা, আজ আমি তোমাদেরকে ফেনউইক ট্রি (Fenwick Tree) নামক একটি অত্যন্ত কার্যকর ডেটা স্ট্রাকচার সম্পর্কে শিখতে দেব। এটি মূলত প্রস্তুত করা হয়েছে প্রিফিক্স সাম (Prefix Sum) ক্যালকুলেট করা এবং ডেটা আপডেট করার জন্য। এই টিউটোরিয়ালে আমরা রেঞ্জ সাম কোয়ারি বা একটি নির্দিষ্ট রেঞ্জের মধ্যে সাম ক্যালকুলেট করার জন্য ফেনউইক ট্রি কিভাবে ব্যবহার করতে পারি সে সম্পর্কে জানতে পারবে।

---

#### ১. ফেনউইক ট্রি ক্লাস

প্রথমে, আমরা একটি `FenwickTree` ক্লাস তৈরি করব। এই ক্লাসে নিম্নলিখিত পদ্ধতিগুলো থাকবে:

- `constructor(size)`: ট্রি ইনিশিয়ালাইজ করতে ব্যবহৃত হবে।
- `update(index, value)`: একটি নির্দিষ্ট ইনডেক্সে ডেটা আপডেট করতে ব্যবহৃত হবে।
- `getSum(index)`: একটি নির্দিষ্ট ইনডেক্সের প্রিফিক্স সাম পেতে ব্যবহৃত হবে।

```javascript
class FenwickTree {
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

    getSum(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}
```

---

#### ২. রেঞ্জ সাম কোয়ারি ফাংশন

এর পরে, আমরা একটি ফাংশন তৈরি করব যাতে আমরা একটি নির্দিষ্ট রেঞ্জের (start থেকে end) মধ্যে সাম ক্যালকুলেট করতে পারি।

```javascript
function rangeSumQuery(tree, start, end) {
    if (start === 1) {
        return tree.getSum(end);
    } else {
        return tree.getSum(end) - tree.getSum(start - 1);
    }
}
```

---

#### ৩. বিস্তারিত ব্যাখ্যা

**১. ফেনউইক ট্রি ক্লাস:**

- **constructor(size):**  
  - এই পদ্ধতিটি ফেনউইক ট্রি ইনিশিয়ালাইজ করে।  
  - `this.n` হল ট্রির সাইজ বা মোট উপাদানের সংখ্যা।  
  - `this.tree` হল একটি অ্যারে যা ট্রির ডেটা সংরক্ষণ করে। এটি