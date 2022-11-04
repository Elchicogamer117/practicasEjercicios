function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable( array ) {
    for (let value of array) {
        yield value
    }
}
const nombres = ['Carter', 'John', 'Kai', 'Douglas', 'Emile'];
const it = iterable( nombres );
for (let i = 0; i < nombres.length+2; i++) {
    console.log(nombres[i]);
}
console.log("--------------")
for (let i = 0; i < nombres.length+2; i++) {
    console.log(it.next().value);
}
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);