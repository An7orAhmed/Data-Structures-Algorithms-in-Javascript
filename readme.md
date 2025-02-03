# জাভাস্ক্রিপ্ট দিয়ে ডাটা স্ট্রাকচার ও অ্যালগরিদম

## পরিচিতি
জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার মাধ্যমে ডাটা স্ট্রাকচার ও অ্যালগরিদম শেখার জন্য এই রিপোজিটরিটি তৈরি করা হয়েছে। এখানে প্রতিটি টপিক বিশদভাবে ব্যাখ্যা করা হয়েছে, যাতে তুমি সহজেই বিভিন্ন সমস্যা সমাধানের দক্ষতা অর্জন করতে পারো।

ডাটা স্ট্রাকচার ও অ্যালগরিদম শেখার মাধ্যমে তুমি প্রোগ্রামিং সমস্যার কার্যকর সমাধান তৈরি করতে পারবে, যা তোমার সফটওয়্যার ডেভেলপমেন্ট দক্ষতা আরও উন্নত করবে।

---

## শুরু করার পূর্বে
ডাটা স্ট্রাকচার ও অ্যালগরিদম শেখার আগে কিছু মৌলিক বিষয় সম্পর্কে ধারণা থাকা গুরুত্বপূর্ণ। এগুলো না জানলে, অ্যালগরিদম এবং ডাটা স্ট্রাকচার বোঝা কঠিন হতে পারে।

### ১. জাভাস্ক্রিপ্টের মৌলিক ধারণা
জাভাস্ক্রিপ্ট হলো একটি জনপ্রিয় প্রোগ্রামিং ভাষা যা মূলত ওয়েব ও মোবাইল অ্যাপ ডেভেলপমেন্টে ব্যবহৃত হয়। এর মৌলিক বিষয়গুলোর মধ্যে রয়েছে:
- **ভেরিয়েবল**: তথ্য সংরক্ষণের জন্য ব্যবহৃত হয়।
- **কন্ডিশনাল স্টেটমেন্ট**: লজিক্যাল সিদ্ধান্ত গ্রহণে ব্যবহৃত হয়।
- **লুপ**: নির্দিষ্ট সংখ্যক বার কোড ব্লক এক্সিকিউট করার জন্য ব্যবহৃত হয়।
- **ফাংশন**: কোড পুনরায় ব্যবহারের জন্য ব্যবহৃত হয়।
- **ক্লাস**: অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর জন্য ব্যবহৃত হয়।

### ২. অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)
OOP একটি শক্তিশালী প্রোগ্রামিং ধারণা, যা অবজেক্ট ভিত্তিক। এর মৌলিক বিষয়গুলো হলো:
- **ক্লাস**: অবজেক্ট তৈরির ব্লুপ্রিন্ট।
- **অবজেক্ট**: ক্লাসের একটি নির্দিষ্ট ইনস্ট্যান্স।
- **ইনহেরিটেন্স**: একটি ক্লাস অন্য একটি ক্লাসের বৈশিষ্ট্য গ্রহণ করতে পারে।
- **পলিমরফিজম**: একই মেথড বিভিন্নভাবে প্রয়োগ করা যায়।

### ৩. ডাটা স্ট্রাকচার ও অ্যালগরিদমের মৌলিক ধারণা
ডাটা স্ট্রাকচার হলো তথ্য সংরক্ষণ ও সংগঠনের পদ্ধতি এবং অ্যালগরিদম হলো কোনো সমস্যার সমাধানের জন্য ধাপে ধাপে পরিকল্পিত নির্দেশাবলি। গুরুত্বপূর্ণ বিষয়গুলোর মধ্যে রয়েছে:
- **অ্যারে (Array)**
- **লিংকড লিস্ট (Linked List)**
- **স্ট্যাক (Stack) ও কিউ (Queue)**
- **ট্রি (Tree) ও গ্রাফ (Graph)**
- **সার্চিং (Searching) ও সর্টিং (Sorting) অ্যালগরিদম**

### ৪. টাইম কমপ্লেক্সিটি
অ্যালগরিদমের কার্যকারিতা বোঝার জন্য টাইম কমপ্লেক্সিটি গুরুত্বপূর্ণ। এটি প্রকাশ করা হয় **বিগ-ও নোটেশন** এর মাধ্যমে:
- **O(1)**: কনস্ট্যান্ট টাইম কমপ্লেক্সিটি।
- **O(n)**: লিনিয়ার টাইম কমপ্লেক্সিটি।
- **O(n²)**: কুয়াড্রাটিক টাইম কমপ্লেক্সিটি।

---

এই মৌলিক বিষয়গুলো ভালোভাবে জানার পর তুমি সহজেই জাভাস্ক্রিপ্ট দিয়ে বিভিন্ন ডাটা স্ট্রাকচার ও অ্যালগরিদম প্রয়োগ করতে পারবে এবং দক্ষ সফটওয়্যার ডেভেলপার হিসেবে নিজেকে গড়ে তুলতে পারবে।

## টপিকস অনুযায়ী ফোল্ডার এবং কনটেন্ট:

### 1. Pattern Questions  
  - Print a Rectangle Pattern  
  - Print a Hollow Rectangle Pattern  
  - Print an Inverted Half Pyramid  
  - Print a Half Pyramid After 180° Rotation  
  - Print an Inverted Number Pyramid  
  - Print a 0-1 Pattern  
  - Print a Rhombus Pattern  
  - Print a Triangle Number Pattern  
  - Print a Palindromic Pattern  
  - Print a Zig-Zag Pattern  

---

### 2. Number-related Topics  
  - Convert Decimal to Binary  
  - Convert Binary to Decimal  
  - Reverse a Number  
  - Check if a Number is Prime  
  - Check if a Number is Armstrong  
  - Find GCD and LCM of Two Numbers  
  - Count the Number of Digits in a Number  
  - Sum of Digits of a Number  

---

### 3. Functions  
  - Create a Function to Find Factorial  
  - Create a Function to Find the nth Fibonacci Number  
  - Check if a Number is Even or Odd using a Function  
  - Implement a Function to Find the Greatest of Three Numbers  
  - Write a Function to Swap Two Numbers Without a Temporary Variable  
  - Implement a Function to Reverse a String  

---

### 4. Time Complexity  
  - Analyze Time Complexity of Bubble Sort  
  - Analyze Time Complexity of Binary Search  
  - Analyze Time Complexity of Recursive Factorial Function  
  - Compare Time Complexity of Different Sorting Algorithms  
  - Optimize Code to Reduce Time Complexity  

---

### 5. Arrays  
  - Find the Largest Element in an Array  
  - Find the Second Largest Element in an Array  
  - Find the Missing Number in an Array  
  - Check if an Array is Sorted  
  - Rotate an Array by k Positions  
  - Find the Union and Intersection of Two Arrays  
  - Find the Subarray with Maximum Sum (Kadane's Algorithm)  

---

### 6. 2D Arrays  
  - Print a 2D Array in Row-Wise and Column-Wise Order  
  - Find the Transpose of a Matrix  
  - Rotate a 2D Matrix by 90°  
  - Find the Sum of Diagonal Elements in a Matrix  
  - Spiral Traversal of a Matrix  

---

### 7. Character Arrays and Pointers  
  - Reverse a Character Array  
  - Convert Lowercase Letters to Uppercase in a Character Array  
  - Find the Length of a Character Array Without Using Built-in Functions  
  - Swap Two Pointers Without Using a Third Variable  
  - Find the Address of Each Character in a Character Array  

---

### 8. Strings  
  - Reverse a String Without Using Extra Space  
  - Check if a String is a Palindrome  
  - Count the Number of Vowels and Consonants in a String  
  - Find the First Non-Repeating Character in a String  
  - Implement String Compression  

---

### 9. Bit Manipulation  
  - Find the Only Non-Repeating Element in an Array (XOR Method)  
  - Check if a Number is a Power of 2  
  - Count the Number of Set Bits in an Integer  
  - Swap Two Numbers Using Bitwise Operators  
  - Toggle the kth Bit of a Number  

---

### 10. Recursion  
  - Find Factorial of a Number Using Recursion  
  - Print Fibonacci Sequence Using Recursion  
  - Solve Tower of Hanoi Using Recursion  
  - Find Sum of Digits of a Number Using Recursion  
  - Reverse a String Using Recursion  

---

### 11. Backtracking  
  - Solve the Rat in a Maze Problem  
  - Solve the N-Queens Problem  
  - Find All Permutations of a Given String  
  - Solve the Sudoku Solver Problem  
  - Print All Subsets of a Given Set  

---

### 12. Sorting Algorithms  
  - Implement Merge Sort  
  - Implement Quick Sort  
  - Implement Selection Sort  
  - Implement Bubble Sort  
  - Implement Insertion Sort  

---

### 13. Vectors and Pairs  
  - Sort a Vector of Pairs by the Second Element  
  - Merge Two Sorted Vectors into One  
  - Implement a Custom Comparator for Sorting Pairs  
  - Find the Sum of Elements in a Vector  
  - Remove Duplicates from a Vector  

---

### 14. Object-Oriented Programming (OOP)  
  - Implement a Class for a Bank Account  
  - Implement Inheritance with a Base and Derived Class  
  - Demonstrate Polymorphism Using Function Overriding  
  - Implement a Simple Calculator Using Classes and Objects  
  - Design a Student Database System  

---

### 15. Linked List  
  - Reverse a Linked List  
  - Detect a Loop in a Linked List  
  - Find the Middle Element of a Linked List  
  - Delete a Node from a Linked List  
  - Merge Two Sorted Linked Lists  

---

### 16. Stack and Queue  
  - Implement a Stack Using Arrays  
  - Implement a Queue Using Arrays  
  - Implement a Stack Using Linked List  
  - Implement a Queue Using Linked List  
  - Implement a Circular Queue  

---

### 17. Graph  
  - Implement Depth First Search (DFS)  
  - Implement Breadth First Search (BFS)  
  - Find the Shortest Path in a Graph (Dijkstra's Algorithm)  
  - Detect a Cycle in a Graph  
  - Find the Minimum Spanning Tree (Prim's and Kruskal's Algorithm)  

---

### 18. Hashing  
  - Implement a Hash Table with Chaining  
  - Implement Open Addressing for Collision Handling  
  - Find the First Repeating Element in an Array Using Hashing  
  - Count the Frequency of Elements Using a Hash Map  
  - Implement a Custom Hash Function  

---

### 19. Tree  
  - Implement Preorder, Inorder, and Postorder Traversal  
  - Check if a Tree is a Binary Search Tree  
  - Find the Lowest Common Ancestor of Two Nodes in a BST  
  - Find the Height of a Binary Tree  
  - Convert a Binary Tree to a Doubly Linked List  

---

### 20. Dynamic Programming (DP)  
  - Find the nth Fibonacci Number Using DP  
  - Solve the Knapsack Problem Using DP  
  - Find the Longest Common Subsequence Using DP  
  - Find the Minimum Edit Distance Between Two Strings  
  - Find the Maximum Profit in the Rod Cutting Problem  

---

### 21. Grid Problems  
  - Find the Shortest Path in a Grid Using BFS  
  - Count the Number of Islands in a Grid  
  - Solve the Unique Paths Problem  
  - Solve the Minimum Sum Path Problem  
  - Implement Flood Fill Algorithm  

---

### 22. Binary Indexed Tree (BIT)  
  - Implement Fenwick Tree for Range Sum Queries  
  - Update and Query a BIT for Range Updates  
  - Implement a BIT for Finding Prefix Sum  
  - Find the kth Smallest Element Using BIT  
  - Use BIT for Counting Inversions in an Array  

---

### 23. Segment Tree  
  - Build a Segment Tree for Range Sum Queries  
  - Implement a Segment Tree for Range Minimum Queries  
  - Implement Lazy Propagation in a Segment Tree  
  - Update a Segment Tree with Point Updates  
  - Find the Maximum in a Given Range Using a Segment Tree  

---

বন্ধুরা, এই কোর্সের প্রতিটি টপিক তোমাদের প্রোগ্রামিং দক্ষতা বাড়ানোর জন্য ডিজাইন করা হয়েছে। আশা করি তোমরা এই রিপোজিটরি থেকে শিখে মজা পাবে!