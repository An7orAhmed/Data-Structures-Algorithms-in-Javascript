import 'dart:io';

void printRectanglePattern(int rows, int columns) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < columns; j++) {
      stdout.write('* ');
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

  // আয়তাকার প্যাটার্ন প্রিন্ট করা
  printRectanglePattern(rows, columns);
}
