
function Node(value) {
    this.value = value;
    this.next = null;
}

function deleteNode(head, value) {
    if (head === null) return null;
    
    if (head.value === value) {
        return head.next;
    }
    
    let current = head;
    while (current.next !== null) {
        if (current.next.value === value) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    
    return head;
}

