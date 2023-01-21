function readFile(path) {
    throw new Error('Cannot find File PATH');
    return '파일 내용';
}

function processFile(path) {
    let content;
    try {
        content = readFile(path);
    } catch(error){
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        content = '파일을 못읽음. 기본 내용';
    }
    finally{
        console.log('어쨌든 실행');
    }

    const result = `hi ${content}`;
    return result;
}

const result = processFile('HELLO path');
console.log(result);