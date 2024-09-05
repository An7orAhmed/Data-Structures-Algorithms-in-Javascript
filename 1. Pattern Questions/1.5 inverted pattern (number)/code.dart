import 'dart:io';

void printInvertedNumberPattern(int rows) {
  for (int i = 1; i <= rows; i++) {
    for (int j = rows; j >= i; j--) {
      stdout.write('$i '); // সংখ্যা প্রিন্ট করা
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // ইনভার্টেড প্যাটার্ন সংখ্যা দিয়ে প্রিন্ট করা
  printInvertedNumberPattern(rows);
}
