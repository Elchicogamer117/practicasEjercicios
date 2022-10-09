//           10
//     4           20
// 2       8   16      24

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert( value ) {
        const newNode = new Node(value);
        if ( this.root === null ) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while ( true ) {
                if ( value < currentNode.value ) {
                    if ( !currentNode.left ) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else { // >=
                    if ( !currentNode.right ) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search( value ) {
        let firstNode = this.root;
        while ( true ) {
            if ( firstNode.right === null && firstNode.left === null ) {
                if (value !== firstNode.value) {
                    return "valor no encontrado";
                }
            }
            if ( value === firstNode.value ) {
                return firstNode;
            } 
            else if ( value < firstNode.value ) {
                firstNode = firstNode.left;
            } else {
                firstNode = firstNode.right;
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(16);
tree.insert(24);

tree.search(4);
tree.search(24);
