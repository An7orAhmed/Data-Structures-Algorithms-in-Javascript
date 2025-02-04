function update(bit, l, r, val) {
    function updateIndex(i, val) {
        while (i < bit.length) {
            bit[i] += val;
            i += i & -i;
        }
    }

    updateIndex(l, val);
    updateIndex(r + 1, -val);
}

function query(bit, index) {
    let res = 0;
    while (index > 0) {
        res += bit[index];
        index -= index & -index;
    }
    return res;
}

