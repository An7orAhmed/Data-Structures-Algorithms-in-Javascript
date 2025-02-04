
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.size = 10;
        this.buckets = new Array(this.size).fill(null);
    }

    hashFunction(key) {
        return key % this.size;
    }

    insert(key, value) {
        let index = this.hashFunction(key);
        if (this.buckets[index] === null) {
            this.buckets[index] = new Node(key, value);
        } else {
            let node = this.buckets[index];
            while (node.next !== null) {
                if (node.key === key) {
                    node.value = value;
                    return;
                }
                node = node.next;
            }
            if (node.key === key) {
                node.value = value;
            } else {
                node.next = new Node(key, value);
            }
        }
    }

    retrieve(key) {
        let index = this.hashFunction(key);
        let node = this.buckets[index];
        while (node !== null) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return null;
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            let node = this.buckets[i];
            let str = "";
            while (node !== null) {
                str += `(${node.key} => ${node.value}) -> `;
                node = node.next;
            }
            console.log(`Bucket ${i}: ${str || "null"}`);
        }
    }
}

