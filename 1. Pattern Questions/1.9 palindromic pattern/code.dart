import 'dart:io';

void printPalindromicPattern(int rows) {
  for (int i = 1; i <= rows; i++) {
    // স্পেস প্রিন্ট করা (সেন্টারিং করার জন্য)
    for (int j = rows; j > i; j--) {
      stdout.write(' ');
    }
    // সংখ্যা বাড়ানো
    for (int k = 1; k <= i; k++) {
      stdout.write('$k');
    }
    // সংখ্যা কমানো
    for (int l = i - 1; l >= 1; l--) {
      stdout.write('$l');
    }
    print(''); // নতুন লাইন
  }
}

void main() {
  // ইউজার থেকে সারির সংখ্যা ইনপুট নেয়া
  print('সারির সংখ্যা ইনপুট করো:');
  int? rows = int.parse(stdin.readLineSync()!);

  // প্যালিনড্রোমিক প্যাটার্ন প্রিন্ট করা
  printPalindromicPattern(rows);
}
