class FenwickTree {
  constructor(data) {
      this.n = data.length;
      this.tree = new Array(this.n + 1).fill(0);
      for (let i = 1; i <= this.n; i++) {
          this.update(i, data[i - 1]);
      }
  }

  update(index, value) {
      while (index <= this.n) {
          this.tree[index] += value;
          index += index & -index;
      }
  }

  prefixSum(index) {
      let sum = 0;
      while (index > 0) {
          sum += this.tree[index];
          index -= index & -index;
      }
      return sum;
  }

  rangeSum(l, r) {
      return this.prefixSum(r) - this.prefixSum(l - 1);
  }
}