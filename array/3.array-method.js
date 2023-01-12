const fruits = ['🍌', '🍎', '🍇', '🍊'];


console.log(Array.isArray(fruits));

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));


//배열안에 특정한 아이템이 있는지
console.log(fruits.includes('🍎'));

//추가 - 배열 뒤
fruits.push('❤️');
console.log(fruits);

//추가 - 제일 앞
fruits.unshift('💚');
console.log(fruits);

//제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
// console.log(lastItem);

//제거 = 제일 앞
let firstItem = fruits.shift();
console.log(fruits);
// console.log(firstItem);

//중간에 추가 또는 삭제
fruits.splice(1, 0, '🔥');
console.log(fruits);
