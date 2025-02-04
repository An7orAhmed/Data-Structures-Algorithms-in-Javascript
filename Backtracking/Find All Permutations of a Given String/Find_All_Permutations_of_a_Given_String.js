function permutation(str, current) {
    if (current === undefined) {
        current = "";
    }

    if (current.length === str.length) {
        permutations.push(current);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (current.indexOf(str[i]) === -1) {
            permutation(str, current + str[i]);
        }
    }
}

function findAllPermutations(str) {
    permutations = [];
    permutation(str);
    return permutations;
}

