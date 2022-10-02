//*? Construccion de un array y sus metodos 
//* const array = ["Cristian", "John", "Kai"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;

        return item;
    }
    unshift(...item) {
        const newLength = this.length + item.length - 1;
        for (let i = newLength; i > 0; i--) { // recorremos los elementos existentes
            this.data[i] = this.data[i-item.length];
        }
        for(let j = 0; j < item.length; j++) { // agregando nuevos elementos, en las primeras posiciones del "vector"
            this.data[j] = item[j]
            this.length++;
        }
        return this.data;
    }

}

const myArray = new MyArray();

myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.unshift(4)
myArray.unshift(0,1,2,3)