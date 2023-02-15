'use strict';

/**
 * 글로벌 컨텍스트의 this
 * 브라우저
 * 노드 : moduele
 */

console.log(this);
console.log(globalThis);

console.clear();

/**
 * 함수 내부에서의 this
 */

function fun() {
    console.log(this);
}

fun(); //globalThis(엄격 모드 아닌경우), undefined(엄격 모드)