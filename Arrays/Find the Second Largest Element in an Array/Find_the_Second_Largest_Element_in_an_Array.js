function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest !== -Infinity ? secondLargest : null;
}
