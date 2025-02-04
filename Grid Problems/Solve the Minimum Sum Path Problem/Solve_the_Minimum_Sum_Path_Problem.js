এই সমস্যাটি সমাধান করার জন্য আমাদের একটি গ্রিডের বাম দিক থেকে ডানদিকে হোক অন্তত যাওয়া পথের সম্পূর্ণ সারি যোগফল খুঁজে বের করতে হবে। আমাদের শুধুমাত্র ডান বা নিচে মুভ করতে পারব!

নিচে আমার কোডটি লিখলাম:

function minimumSumPath(grid) {
    let rows = grid.length;
    if (rows === 0) return 0;
    let cols = grid[0].length;

    // ডিনামিক প্রোগ্রামিং টেবিল তৈরি করা
    let dp = Array(rows).fill().map(() => Array(cols).fill(0));

    // প্রথম সেল সেট করা
    dp[0][0] = grid[0][0];

    // প্রথম সারি পূরণ করা
    for (let i = 1; i < cols; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }

    // প্রথম কলাম পূরণ করা
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }

    // বাকি সকল সেল পূরণ করা
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }

    return dp[rows-1][cols-1];
}

