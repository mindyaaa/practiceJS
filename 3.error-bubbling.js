function runInDelay(seconds) {
    return new Promise((resolve, reject) => {

    if(seconds < 0) {
        reject(new Error('세컨즈가 올바르지 않음'))
    }
        setTimeout(resolve, seconds * 1000)
    });
};

runInDelay(-1)
.then(() => console.log('DONE'))
.catch((error) => console.error(error))
.finally(() => console.log('END'))
