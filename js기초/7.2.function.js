// function fullName (firstName, lastName) {
//     return `${firstName} ${lastName}`
// }

// console.log(fullName('민경', '김'));

// function add(a,b) {
//     return a+b;
// }

// const result = add(1,2);
// console.log(result);

const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

//전달된 action은 콜백함수이다
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라
//힘수를 가리키고 있는 함수의 참조값이 전달된다
//그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨 
function calculator (a,b,action) {
    if (a < 0 || b < 0) {
        return;
    }
    let result = action(a,b);
    console.log(result);
    return result;
}


calculator(1,-2,add);
calculator(2,3,multiply);
