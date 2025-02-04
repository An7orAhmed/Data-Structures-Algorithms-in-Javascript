# Solve_the_Rat_in_a_Maze_Problem

**Author**: Antor Ahmed


এই টিউটোরিয়ালে, আমরা ব্যাস্পি (Breadth-First Search - BFS) অ্যালগরিদম ব্যবহার করে র্যাট ইন এ মেজ সমস্যা সমাধান করব। এই অ্যালগরিদমটি সবচেয়ে কাছাকাছি এবং সবচেয়ে স্বল্পতম পথ খুঁজে বের করতে সাহায্য করে।

#### সমস্যা বিবরণ:
একটি মেজ একটি গ্রিড হিসাবে প্রদর্শিত হয়, যেখানে 0 মানে খোলা পথ, এবং 1 মানে দেয়াল। র্যাটটি (0,0) পজিশনে শুরু করে এবং লক্ষ্য হলো (n-1, n-1) পজিশনে পৌঁছানো। আমাদের কাজ হলো এই পথটি খুঁজে বের করা।

#### কোড ব্যাখ্যা:
```javascript
function solveRatInMaze(maze, n) {
    // কিউ হলো বর্তমান অবস্থান এবং পথ ধারণ করে
    let queue = [];
    queue.push({ coords: [0, 0], path: [[0, 0]] });
    
    // নিচে, উপরে, বাম, ডান দিকে যাওয়ার দিকনির্দেশ
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // ভিজিটেড সেট বিজ্ঞপ্ত অবস্থান ট্র্যাক করতে
    let visited = new Set();
    visited.add('0,0');
    
    // কিউ খালি হওয়া পর্যন্ত চালাও
    while (queue.length > 0) {
        let current = queue.shift();
        
        // যদি বর্তমান অবস্থান লক্ষ্য হয়, পথ ফেরত দাও
        if (current.coords[0] === n-1 && current.coords[1] === n-1) {
            return current.path;
        }
        
        // সমস্ত সম্ভাব্য দিকে অন্বেষণ করো
        for (let dir of directions) {
            let newX = current.coords[0] + dir[0];
            let newY = current.coords[1] + dir[1];
            
            // নতুন অবস্থানটি বৈধ কিনা তা পরীক্ষা করো
            if (newX >= 0 && newX <