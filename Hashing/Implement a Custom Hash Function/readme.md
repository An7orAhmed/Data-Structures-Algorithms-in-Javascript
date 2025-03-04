# Implement_a_Custom_Hash_Function

**Author**: Antor Ahmed



এই টিউটোরিয়ালে আমরা একটি কাস্টম হ্যাশ ফাংশন বানাতে শিখব। হ্যাশ ফাংশন হলো এক ধরনের অ্যালগরিদম যা ডেটা কে একটি নির্দিষ্ট আকারের নম্বরে রূপান্তর করে। এটা ডাটাবেজ এবং ক্রিপ্টোগ্রাফিতে ব্যাপক ব্যবহৃত হয়।

উপরের কোডটি একটি সহজ হ্যাশ ফাংশন যা একটি স্ট্রিং এর প্রতিটি অক্ষরের ASCII মান যোগ করে এবং একটি মোট মান ফেরত দেয়। চলুন বিস্তারিত বলি:

1. **ফাংশন শুরু করুন**: `function customHash(str)` - এখানে str হলো ইনপুট স্ট্রিং।
2. **টোটাল শুরু করুন**: `let total = 0;` - এটা হলো যেখানে আমরা প্রতিটি অক্ষরের মান যোগ করব।
3. **লুপ চালান**: `for (let i = 0; i < str.length; i++)` - এই লুপটি স্ট্রিংটির প্রতিটি অক্ষরের মধ্য দিয়ে চলে যাবে।
4. **যোগ করুন**: `total += str.charCodeAt(i);` - প্রতিটি অক্ষরের ASCII মান টোটালে যোগ করুন। `charCodeAt()` ফাংশনটি অক্ষরের ASCII মান দেয়।
5. **ফেরত দিন**: `return total;` - শেষ পর্যন্ত মোট মান ফেরত দিন।

এই হ্যাশ ফাংশনটি খুবই সহজ এবং শিক্ষার্থীদের জন্য উপযুক্ত। এটা প্রতিটি অক্ষরের মান যোগ করে এবং একটি নির্দিষ্ট মান দেয় যা সেই স্ট্রিংটির হ্যাশ হিসেবে কাজ করে। এটা মনে রাখতে হবে যে এটা একটি খুবই সরল হ্যাশ ফাংশন এবং আসল বিশ্বে ব্যবহারের জন্য এটা নিরাপদ নাও হতে পারে, তবে শিখতে এটা খুবই ভালো।