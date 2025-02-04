function printAllSubsets(set) {
    const n = set.length;
    const total = Math.pow(2, n);
    
    for (let i = 0; i < total; i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(set[j]);
            }
        }
        console.log(subset);
    }
}
