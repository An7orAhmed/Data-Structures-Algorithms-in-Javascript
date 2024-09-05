import 'dart:io';

void printCenteredTriangleNumberPattern(int rows) {
  for (int i = 1; i <= rows; i++) {
    // স্পেস প্রিন্ট করা (সেন্টারিং করার জন্য)
    for (int j = rows; j > i; j--) {
      stdout.write(' ');
    }
    // সংখ্যা প্রিন্ট করা
    for (int k = 1; k <= i; k++) {
      stdout.write('$i '); // সারির সংখ্যা প্রিন্ট করা
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // সেন্টারড ট্রায়াঙ্গল নম্বর প্যাটার্ন প্রিন্ট করা
  printCenteredTriangleNumberPattern(rows);
}
