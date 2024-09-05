import 'dart:io';

void printRhombusPattern(int rows) {
  // উপরের অংশ
  for (int i = 1; i <= rows; i++) {
    // স্পেস প্রিন্ট করা
    for (int j = rows; j > i; j--) {
      stdout.write(' '); // এক স্পেস
    }
    // `*` প্রিন্ট করা
    for (int k = 1; k <= i; k++) {
      stdout.write('* ');
    }
    print(''); // নতুন লাইন
  }

  // নিচের অংশ
  for (int i = rows - 1; i > 0; i--) {
    // স্পেস প্রিন্ট করা
    for (int j = rows; j > i; j--) {
      stdout.write(' '); // এক স্পেস
    }
    // `*` প্রিন্ট করা
    for (int k = 1; k <= i; k++) {
      stdout.write('* ');
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('মাঝামাঝি অংশের সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // রোম্বাস প্যাটার্ন প্রিন্ট করা
  printRhombusPattern(rows);
}
