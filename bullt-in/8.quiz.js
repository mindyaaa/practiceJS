// 문자열 모든 캐릭터 하나씩 출력
const text = 'Hello World';
const textArray = text.split('');
// console.log(textArray);
textArray.forEach((i) => console.log(i));


// 사용자들의 id를 잘라서 각각 id에 배열로 보관
const ids = 'user1, user2, user3, user4';
console.log(ids.split(','));


// console.clear();

// 1초에 한 번 씩 씨계를 (날짜포함) 출력해보자
// setInterval(showTime, 1000);

function showTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    const currentTime = `${year}년 ${month}월 ${date}일 ${hour}시 ${minute}분 ${seconds}초`;

    console.log(currentTime);
}

// console.log(currentTime);