### About
This package allows you to wait for an **async** condition, exposing similar API as `wait-promise` package. Call `every(100, 100).until(condition)` translates to `waitUntil(condtion, 100)`. See usage example below.

### Usage

```javascript
import waitUntil from 'wait-until-async'

var i = 0;
async function condition1() {
    i++;
    return i > 10;
}

Promise.resolve()
    .then(() => waitUntil(condition1, 100))
    .then(() => { if (i <= 10) throw "Wait didn't work"; })
    .then(() => console.log('success'))
    .catch(() => console.log('fail'));
```
