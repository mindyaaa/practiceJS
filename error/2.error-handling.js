//try catch finally

function readFile(path) {
    // throw new Error('파일 경로를 찾을 수 없습니다!');
    return '파일의 내용';
}

function processFile(path) {
    const content = readFile(path);
    const result = 'hi ' + content;
    return result;
}

const result = processFile('경로');
console.log(result);