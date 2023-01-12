// Spread 연산자, 전개구문
// 모든 Iterable은 spread 될 수 있음

function add(a,b,c) {
    return a+b+c;
}

const nums = [1,2,3];
console.log(add(...nums));

//Rest parameters
function sum (first, second, ...nums) {
    console.log(nums);
};

sum(1,2,3,4,5,6,7,8,9);

console.clear();


//Array Concat
const fruits1 = ['🍎', '🍌'];
const fruits2 = ['🍊', '🍇'];

let arr = fruits1.concat(fruits2);
console.log(arr);

let arr2 = ['arr2', ...fruits1, ...fruits2];
console.log(arr2);


//Object
const mindy = {name : 'Mindy', age : 20};
const updated = {
    ...mindy,
    job :'engineer',
}

console.log(updated);