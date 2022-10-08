class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    }
    
class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top.value;
    }
    enqueue( value ) {
        const newNode = new Node(value);
        if ( this.length === 0 ) {
            this.top    = newNode;
            this.bottom = newNode;
        } else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
    
        this.length++;
    
        return this;
    }
    dequeue() {
        if ( !this.top ) {
            return null;
        }
        if ( this.top === this.bottom ) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    
        return this;
    }
}

const myQueue = new Queue();

myQueue.push(1);
myQueue.push(1);
myQueue.peek();
myQueue.push(7);
myQueue.peek();
myQueue.push(3);
myQueue.pop();
myQueue.push(3);
myQueue.push(4);
myQueue.peek();
myQueue.push(3);
myQueue.pop();
myQueue.pop();
myQueue.pop();
