import 'dart:io';

void printInvertedHalfPyramid(int rows) {
  for (int i = rows; i > 0; i--) {
    for (int j = 0; j < i; j++) {
      stdout.write('* ');
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // ইনভার্টেড হাফ পিরামিড প্যাটার্ন প্রিন্ট করা
  printInvertedHalfPyramid(rows);
}
