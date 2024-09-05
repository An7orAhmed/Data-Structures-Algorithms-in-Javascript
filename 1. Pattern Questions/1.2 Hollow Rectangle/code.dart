import 'dart:io';

void printHollowRectanglePattern(int rows, int columns) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < columns; j++) {
      // প্রথম এবং শেষ সারি অথবা প্রথম এবং শেষ কলাম
      if (i == 0 || i == rows - 1 || j == 0 || j == columns - 1) {
        stdout.write('* ');
      } else {
        stdout.write('  '); // ভিতরের অংশে ফাঁকা জায়গা
      }
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // ইউজার থেকে কলামের সংখ্যা ইনপুট নেয়া
  print('কলামের সংখ্যা ইনপুট করো:');
  int? columns = int.parse(stdin.readLineSync()!);

  // হোল্লো আয়তাকার প্যাটার্ন প্রিন্ট করা
  printHollowRectanglePattern(rows, columns);
}
