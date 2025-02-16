class DoublyListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function removeElements(head, val) {
    // Hapus node di awal yang memiliki nilai val
    while (head !== null && head.val === val) {
        head = head.next;
        if (head !== null) {
            head.prev = null;
        }
    }
    
    if (head === null) return null;
    
    let current = head;
    
    while (current !== null) {
        if (current.val === val) {
            const prevNode = current.prev;
            const nextNode = current.next;
            
            // Hubungkan node sebelumnya dan berikutnya
            if (prevNode) {
                prevNode.next = nextNode;
            }
            if (nextNode) {
                nextNode.prev = prevNode;
            }
            
            current = nextNode; // Lanjut ke node berikutnya
        } else {
            current = current.next; // Lanjut iterasi
        }
    }
    
    return head;
}

// Contoh penggunaan
const head = new DoublyListNode(1);
head.next = new DoublyListNode(2, head);
head.next.next = new DoublyListNode(3, head.next);
head.next.next.next = new DoublyListNode(2, head.next.next);
head.next.next.next.next = new DoublyListNode(4, head.next.next.next);

const newHead = removeElements(head, 2);

// Menampilkan hasil
let current = newHead;
while (current !== null) {
    console.log(current.val); // Output: 1, 3, 4
    current = current.next;
}