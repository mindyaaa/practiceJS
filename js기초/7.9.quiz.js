// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫ㅈㅏ의 두배값을 다 출력하고 싶음

let multiply = (a) => 2*a;
let show = (b) => b;

function iterate(max, action) {
    for (let i = 0; i <= max; i++) {
        let result = action(i);
        console.log(result);
    }
};

iterate(5, multiply);
iterate(5, show);

setTimeout(() => console.log('3초뒤 이 함수가 실행될거에요'), 3000)