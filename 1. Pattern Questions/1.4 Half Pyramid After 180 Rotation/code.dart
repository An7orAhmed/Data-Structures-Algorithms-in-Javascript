import 'dart:io';

void printHalfPyramid180Rotation(int rows) {
  for (int i = 1; i <= rows; i++) {
    // স্পেস প্রিন্ট করা
    for (int j = 0; j < rows - i; j++) {
      stdout.write('  '); // দুইটি স্পেস
    }
    // `*` প্রিন্ট করা
    for (int k = 0; k < i; k++) {
      stdout.write('* ');
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // হাফ পিরামিড 180° রোটেশন প্যাটার্ন প্রিন্ট করা
  printHalfPyramid180Rotation(rows);
}
