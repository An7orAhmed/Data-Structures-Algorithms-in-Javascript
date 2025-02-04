function findMiddleElement(head) {
    // Initialize two pointers, slowPointer and fastPointer
    let slowPointer = head;
    let fastPointer = head;

    // Traverse the list
    while (fastPointer.next && fastPointer.next.next) {
        slowPointer = slowPointer.next; // Move slowPointer by one
        fastPointer = fastPointer.next.next; // Move fastPointer by two
    }

    // When the loop ends, slowPointer will point to the middle node
    return slowPointer.data;
}

// Helper Node class to represent a node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Helper LinkedList class to easily build the list
class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    getHead() {
        return this.head;
    }
}

// Usage example
const myList = new LinkedList();
myList.addAtEnd(10);
myList.addAtEnd(20);
myList.addAtEnd(30);

const head = myList.getHead();
const middleValue = findMiddleElement(head);
console.log("Middle element:", middleValue); // Output: 20

