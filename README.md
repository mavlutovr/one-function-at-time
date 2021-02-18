# one-function-at-time

Run functions in turn to prevent functions from running at the same time.

![](https://i.imgur.com/P40gUnV.gif)

## Demo

https://webdeveloper.pro/demo/one-function-at-time/demo.html

## Install

```shell
npm install one-function-at-time --save
```

## Setup

```javascript
const { OneFunctionAtTime } = require('one-function-at-time');
```

## Usage

```javascript
const queue = new OneFunctionAtTime();

// First function will run immediately
queue.add(next => {
    console.log('start 1');
    
    setTimeout(() => {
        console.log('end 1');
        next();
    });
});

// Second function will run after first function finish
queue.add(next => {
    console.log('start 2');
    
    setTimeout(() => {
        console.log('end 2');
        next();
    });
});

// start 1
// end 1
// start 2
// end 2
```

## License

MIT

