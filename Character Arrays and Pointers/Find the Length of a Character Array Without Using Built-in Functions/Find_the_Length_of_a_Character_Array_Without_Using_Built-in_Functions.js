function characterArrayLength(arr) {
    let counter = 0;
    while (arr[counter] !== undefined) {
        counter++;
    }
    return counter;
}

