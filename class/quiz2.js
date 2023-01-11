class Staff {
    #name;
    #department;
    #hour;
    #payRate;
    constructor(name, department, hour, payRate) {
        this.#name = name;
        this.#department = department;
        this.#hour = hour;
        this.#payRate = payRate;
    }

    get totalPay() {
        return this.#hour*this.#payRate;
    }

}

class FullTime extends Staff {
    #name;
    #department;
    #hour;
    #payRate;

    static PAY_RATE= 10000;
    constructor(name, department, hour) {
        super(name, department, hour, FullTime.PAY_RATE)
    }
}
class PartTime extends Staff {
    #name;
    #department;
    #hour;
    #payRate;

    static PAY_RATE= 8000;
    constructor(name, department, hour) {
        super(name, department, hour, PartTime.PAY_RATE)
    }
}

const mindy = new FullTime('민디', '개발팀', 40);
console.log(mindy.totalPay);

const anna = new PartTime('안나', '개발팀', 20);
console.log(anna.totalPay);