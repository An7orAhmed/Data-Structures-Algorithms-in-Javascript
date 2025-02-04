function convertToUppercase(charArray) {
    for(let i = 0; i < charArray.length; i++) {
        if(charArray[i] >= 'a' && charArray[i] <= 'z') {
            charArray[i] = charArray[i].toUpperCase();
        }
    }
    return charArray;
}