//*? Construccion de una hash table y sus metodos 
//* const array = [["Cristian", 24], ["John", 117], ["Kai", 125 ]];

class HashTable {
    constructor( size ) {
        this.data = new Array(size);
    }
    hashMethod( key ) { // Funcion de prueba
        let hash = 0;
        for ( let i = 0; i < key.length; i++ ) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set( key, value ) {
        const address = this.hashMethod(key);
        if ( !this.data[address] ) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get( key ) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if ( currentBucket ) {
            for ( let i = 0; i < currentBucket.length; i++ ) {
                if ( currentBucket[i][0] === key ) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        return this.data.reduce((instance, value) => {
            const keys = value.map(([key]) => key);
            return instance.concat(keys)
        }, []);
    }
    remove( key ) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if ( currentBucket ) {
            for ( let i = 0; i < currentBucket.length; i++ ) {
                if ( currentBucket[i][0] === key ) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(40);

myHashTable.set("Cristian", 24);
myHashTable.set("John", 117);
myHashTable.set("Kai", 125);