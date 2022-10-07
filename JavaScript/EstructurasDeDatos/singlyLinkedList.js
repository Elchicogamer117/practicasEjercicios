// 1-- > 2-- > 3-- > 4-- > 5-- > null;
class Node {
    constructor( value ) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor( value ) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append( value ) {
        const newNode = new Node(value); //Creamos un nuevo nodo
    
        this.tail.next = newNode; //Agregamos a la cabeza
        this.tail = newNode;      //Apuntamos a la cola
        this.length++;            //Aumentamos el tamaño de la estructura
    
        return this;
    }
    prepend( value ) {
        const newNode = new Node(value);
    
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    
        return this;
    }
    insert( index, value ) {
        if ( index >= this.length ) {
            return this.append( value );
        }
        if ( index === 0 ) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1); // Punto previo para enlazar nuevo punto
        const holdingPointer = firstPointer.next;         // Guardamos ultimo punto para evitar que el garbage collector lo elimine
        firstPointer.next = newNode;                      // Enlazamos nuevo punto
        newNode.next = holdingPointer;                    // Reenlazamos ultimo punto guardado
    
        this.length++;
    
        return this;
    }
    remove( index ) {
        if( index >= this.length ) {
            console.error("Este nodo no existe.")     
            }
        if ( index === 0 ) {
            this.head = this.head.next
            this.length-- 
            return this
        }

        let previousPoiner =  this.getTheIndex(index - 1)
        let nextPointer    =  this.getTheIndex(index + 1 )
        previousPoiner.next = nextPointer
        this.length--
        return this
    }

    getTheIndex( index ) {
        let counter = 0;
        let currentNode = this.head;
    
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

}

let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.append(1);
myLinkedList.append(7);
myLinkedList.append(4);
myLinkedList.append(3);
myLinkedList.insert(3,3);
myLinkedList.insert(0, 'Jonh');

myLinkedList.remove(0);

myLinkedList.remove(9); //error
