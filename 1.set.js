// SET

const set = new Set([1,2,3]);
console.log(set);
console.log(set.size);
console.log(set.has(1));
// set.forEach((i) => console.log(i));
for(const value of set.values()) {
    console.log(value);
} ;

set.add(6);
console.log(set);

set.add(6);
console.log(set);

console.clear();

// Quiz
const obj1 = {name : '🍎', price :8};
const obj2 = {name : '🍌', price :5};
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log(objs);

// Quiz2

const obj3 = {name : '🍌', price:5};
objs.add(obj3);
console.log(objs);