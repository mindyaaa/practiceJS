//접근제어자 - 캡슐화
//private(#), public(디폴트), protected
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };

}

// apple은 Fruit 클래스의 인스턴스 이다. 
const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; //#field는 외부에서 접근 불가
console.log(apple);