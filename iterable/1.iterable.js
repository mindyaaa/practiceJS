const array = ['a','b','c'];
for (const item of array) {
    console.log(item);
};


const iterator = array.values();
// for(const item of iterator) {
//     console.log(item);
// }
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());