//switch
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우

let day = 11;
let dayName;

if (day === 0) {
    dayName = 'Mon';
} else if (day === 1) {
    dayName = 'Tue';
} else if (day === 2) {
    dayName = 'Wed';
} else if (day === 3) {
    dayName = 'Thu';
} else if (day === 4) {
    dayName = 'Fri';
} else if (day === 5) {
    dayName = 'Thu';
} else if (day === 6) {
    dayName = 'Sun';
}

// console.log(dayName);

// console.clear();

switch (day) {
    case 0 :
        dayName = 'Mon';
        break;
    case 1 :
        dayName = 'Tue';
        break;
    case 2 :
        dayName = 'Wed';
        break;
    case 3 :
        dayName = 'Thu';
        break;
    case 4 :
        dayName = 'Fri';
        break;
    case 5 :
        dayName = 'Sat';
        break;
    case 6 :
        dayName = 'Sun';
        break;
    default:
        console.log('해당하는 요일이 없음');
}

console.log(dayName);