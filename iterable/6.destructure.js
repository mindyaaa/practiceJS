const fruits = ['apple', 'orange', 'mango', ' banana'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);


//함수 구조분해할당
function createEmoji() {
    return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

//객체 구조분해할당
const mindy = { name:'Mindy', job:'engineer', age:20 };
function display({name, job, age}) {
    console.log('이름', name);
    console.log('직업', job);
    console.log('나이', age);
}

display(mindy);
console.clear();

const {name, job, age, address='마포구'} = mindy;
console.log(name);
console.log(job);
console.log(age);
console.log(address);

console.clear();


// Quiz

const prop = {
    name: 'Button',
    styles: {
      size: 20,
      color: 'black',
    },
  };
  
  function changeColor({ styles : {color}}) {
    console.log(color);
  }
  
  changeColor(prop);