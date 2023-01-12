let fruits = ['🍌', '🍓', '🍇', '🍓'];

// fruits.forEach((value) => console.log(value));

//조건에 맞는(콜백함수) 아이템을 찾을 때
//find : 제일 먼저 조건에 맞는 아이템
const found = fruits.find((value) => value === '🍓');
console.log(found);

const found = fruits.find((value) => value === '🍓');
