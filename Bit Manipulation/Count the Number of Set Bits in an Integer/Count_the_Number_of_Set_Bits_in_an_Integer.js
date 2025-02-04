একটি পূর্ণসংখ্যার মধ্যে সেট বিটের সংখ্যা গণনা করার জন্য জাভাস্ক্রিপ্ট কোড নিচে দেওয়া হলো:

function countSetBits(n) {
    return n.toString(2).replace(/0/g, '').length;
}

