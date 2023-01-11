class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('EAT');
    }

    sleep() {
        console.log('SLEEP');
    }

}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();

class Dog extends Animal{
    constructor(color, masterName) {
        super(color);
        this.masterName = masterName;
     }

    eat() {
        super.eat();
        console.log('멍멍이 먹는다');
    }

     
    play() {
        console.log('멍멍 PLAY');
    }
}

const dog = new Dog('멍멍', 'ME');
console.log(dog);
dog.play();
dog.eat();