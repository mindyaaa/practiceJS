// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let fruits = ['🍌', '🍓', '🍇', '🍓'];
let newFruits = (array) => {
    const newArray = array.map((i) => i == '🍓' ? '🥝' : i);
    return newArray;
}
console.log(newFruits(fruits));
// console.log(fruits);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝';
// output: 2

let countSecondFruits = (array, fruit) => {
    const newArray = array.filter((i) => i === fruit);
    return newArray.length;
};
console.log(countSecondFruits([ '🍌', '🥝', '🍇', '🥝' ],'🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

let filterSameFruits = (array1, array2) => {
    let filteredFruits = [];

    for(let i = 0; i < array1.length; i++) {
        for(let j = 0 ; j < array2.length; j++) {
            if ( array1[i] === array2[j] ) {
                filteredFruits.push(array1[i]);
            }
        }
    }
     return filteredFruits;
}

console.log(filterSameFruits(['🍌', '🥝', '🍇'],['🍌', '🍓', '🍇', '🍓']));