import 'dart:io';

void printZeroOnePattern(int rows) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < rows - i; j++) {
      stdout.write('${(i + j) % 2} '); // 0 এবং 1 প্রিন্ট করা
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // 0-1 প্যাটার্ন প্রিন্ট করা
  printZeroOnePattern(rows);
}
