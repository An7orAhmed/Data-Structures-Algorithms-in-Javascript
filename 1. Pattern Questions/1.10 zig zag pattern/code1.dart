import 'dart:io';

void printZigZagPattern1(int rows, int columns) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < columns; j++) {
      if (i % 2 == 0) {
        stdout.write('* ');
      } else {
        stdout.write(' *');
      }
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারি ও কলামের সংখ্যা ইনপুট নেয়া
  print('সারি সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  print('কলাম সংখ্যা ইনপুট করো:');
  int? columns = int.parse(stdin.readLineSync()!);

  // জিগ-জাগ প্যাটার্ন প্রিন্ট করা
  printZigZagPattern1(rows, columns);
}
