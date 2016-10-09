import waitUntil from '../lib/index.js'

var i = 0;
async function condition1() {
    i++;
    return i > 10;
}

var j = 0;
async function condition2() {
    j++;
    return j < 0;
}

Promise.resolve()
    .then(() => waitUntil(condition1, 100))
    .then(() => { if (i <= 10) throw "Wait didn't work"; })
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));

Promise.resolve()
    .then(() => waitUntil(condition2, 10))
    .then(() => console.log('fail'))
    .catch(() => console.log('success'));
