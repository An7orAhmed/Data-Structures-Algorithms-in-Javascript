# Reverse_a_Linked_List

**Author**: Antor Ahmed



এই টিউটোরিয়ালে আপনি জানবেন কিভাবে একটি লিঙ্কড লিস্টকে রিভার्स করতে হয়। আমি আন্তর আহমেদ, এবং আমি আপনাদেরকে ধাপে ধাপে বুঝতে সাহায্য করতে পেরে খুশি!

লিঙ্কড লিস্ট হলো ডেটা স্ট্রাকচারের একটি মৌলিক ধারণা। এতে প্রতিটি নোড নেক্সট নোডের রেফারেন্স ধারণ করে। লিস্টকে রিভার্স করার মানে হলো প্রতিটি নোডের next প properly পরিবর্তন করা।

আমরা এখানে ইটারেটিভ পদ্ধতিতে লিস্ট রিভার্স করছি। এই পদ্ধতিতে আমাদের শুধুমাত্র কয়েকটি পোইন্টার ব্যবহার করা হয়:

1. prev: এই পোইন্টারটি মুহূর্তের পিছনের নোডকে নির্দেশ করে
2. current: এই পোইন্টারটি বর্তমান নোডকে নির্দেশ করে
3. nextNode: এই পোইন্টারটি পরবর্তী নোডকে সংরক্ষণ করে

প্রক্রিয়া:
1. প্রথমে prev কে null হিসাবে সেট করা হয়
2. current কে লিস্টের হেড হিসাবে সেট করা হয়
3. যতক্ষণ পর্যন্ত current নোড null না হয়, ততক্ষণ লুপ চলতে থাকে
4. প্রতিটি ধাপে:
   a. পরবর্তী নোডকে সংরক্ষণ করা হয়
   b. বর্তমান নোডের next কে পিছনের নোডে (prev) নির্দেশ করা হয়
   c. prev কে বর্তমান নোডে আপডেট করা হয়
   d. current কে পরবর্তী নোডে নিয়ে যাওয়া হয়
5. শেষ পর্যন্ত prev হলো রিভার্স করা লিস্টের নতুন হেড

এই পদ্ধতির টাইম কমপ্লেক্সিটি হলো O(n), যেখানে n হলো লিস্টের নোডের সংখ্যা। স্পেস কমপ্লেক্সিটি হলো O(1), কারণ আমরা শুধুমাত্র কয়েকটি এক্স্ট্রা পোইন্টার ব্যবহার করেছি।

আশা করি এই টিউটোরিয়ালটি আপনাদের লিঙ্কড লিস্ট রিভার্স করতে সাহায্য করবে। এক্ষেত্রে অনুশীলন করা হলো সবচেয়ে ভালো পদ্ধতি। ভালো লাগলে শেয়ার করতে পারেন!