function countFrequency(array) {
    let frequencyMap = {};
    for (let element of array) {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }
    return frequencyMap;
}

