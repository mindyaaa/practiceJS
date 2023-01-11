//static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;
    //셍성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit() {
        return new Fruit('banana', '🍌');
    };

    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };

}

// apple은 Fruit 클래스의 인스턴스 이다. 
const apple = new Fruit('apple', '🍎');

console.log(apple.name); // apple
console.log(apple.emoji); // 🍎
apple.display(); // apple: 🍎

const banana = Fruit.makeRandomFruit();
console.log(banana);