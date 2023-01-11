//원시타입
let a = 1;
let b = a //1
b = 2;
console.log(a);
console.log(b);

//객체타입
let apple = { //0x1234
    name :'사과',
};

let orange = apple; //0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);