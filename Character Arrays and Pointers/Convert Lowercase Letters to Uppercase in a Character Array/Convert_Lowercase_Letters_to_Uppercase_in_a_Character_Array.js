ক্যারেক্টার অ্যারের ছোট হাতের অক্ষরগুলি বড় হাতের অ্যাক্ষারে রূপান্তর করার জন্য জাভাস্ক্রিপ্ট কোড নিচে দেওয়া হলো:

function convertLowercaseToUppercase(charArray) {
    let result = [];
    for (let char of charArray) {
        if (/^[a-z]$/.test(char)) {
            result.push(char.toUpperCase());
        } else {
            result.push(char);
        }
    }
    return result;
}

