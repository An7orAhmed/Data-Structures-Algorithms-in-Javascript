# Detect_a_Loop_in_a_Linked_List

**Author**: Antor Ahmed



মেনে উঠতে পারো কিনা? এই কোডটি লিঙ্কড লিস্টে লুপ সনাক্ত করার জন্য ব্যবহৃ张 mortal, লিঙ্কড লিস্টে লুপ সনাক্ত করার জন্য জাভাস্ক্রিপ্ট কোড এবং একটি বাংলা টিউটোরিয়াল নিচে দেওয়া হলো:

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    detectLoop() {
        if (!this.head || !this.head.next) {
            return false;
        }

        let slow = this.head;
        let fast = this.head.next;

        while (slow !== fast) {
            if (!fast || !fast.next) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return true;
    }
}
```

--$END$--

মেনে উঠতে পারো কিনা? এই কোডটি লিঙ্কড লিস্টে লুপ সনাক্ত করার জন্য ব্যবহৃ