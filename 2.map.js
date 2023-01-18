const map = new Map();
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, "Hello");
console.log(map.get(key2));
console.log(key1 === key2);
