class BIT {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    add(index, value) {
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

function update_and_query(size, updates, queries) {
    const bit = new BIT(size + 1); // BIT is 1-based

    for (const update of updates) {
        const [l, r, delta] = update;
        bit.add(l, delta);
        if (r + 1 <= size) {
            bit.add(r + 1, -delta);
        }
    }

    const results = [];
    for (const query of queries) {
        const index = query;
        results.push(bit.query(index));
    }

    return results;
}