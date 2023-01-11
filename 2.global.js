// console.log(globalThis);
// console.log(this);
// console.log(infinity);
// console.log(Nan);
// console.log(undefined);

// eval('const num = 2'; console.log(num));
// isFinite();
// parseFloat();


// URL (URI 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야한다

const URL = 'https://민두이.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 잔체 URL이 아니라 부분적인 것은 Component 이용
const part = '민두이.com';
console.log(encodeURIComponent(part));