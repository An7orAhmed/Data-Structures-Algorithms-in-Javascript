import 'dart:io';

void printZigZagPattern2(int rows, int columns) {
  for (int i = 0; i < rows; i++) {
    // প্রথমে স্পেস প্রিন্ট করা
    for (int s = 0; s < i; s++) {
      stdout.write(' ');
    }
    // স্টার প্রিন্ট করা
    for (int j = 0; j < columns; j++) {
      stdout.write('* ');
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
  printZigZagPattern2(rows, columns);
}
