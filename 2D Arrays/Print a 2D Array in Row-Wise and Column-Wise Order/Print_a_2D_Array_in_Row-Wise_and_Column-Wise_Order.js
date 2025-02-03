
// 2D অ্যারেকে সারি অনুযায়ী এবং কলাম অনুযায়ী প্রিন্ট করার ফাংশন
function printRowWise(arr) {
    console.log("Row-wise:");
    for (let row of arr) {
        console.log(row.join(', '));
    }
}

function printColumnWise(arr) {
    console.log("\nColumn-wise:");
    // প্রতিটি কলামের জন্য রো ধরাধরি করে এক্সেস করবো
    for (let col = 0; col < arr[0].length; col++) {
        let column = [];
        for (let row = 0; row < arr.length; row++) {
            column.push(arr[row][col]);
        }
        console.log(column.join(', '));
    }
}

// উদাহরণ অ্যারে
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printRowWise(twoDArray);
printColumnWise(twoDArray);