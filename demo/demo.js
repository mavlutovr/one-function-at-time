// Demo install
// webpack -w ./demo.js --devtool source-map

const { OneFunctionAtTime } = require('../index');


// Without
const container = document.getElementById('js-container');
window.runWithout = () => {
  container.innerHTML += '<span class="orange">1</span>';

  setTimeout(() => {
    container.innerHTML += '<span class="blue">2</span>';
  }, 2000);
};


// With
const queue = new OneFunctionAtTime();

queue.on('start', () => {
  console.log('Functions are started');
});

queue.on('finish', () => {
  console.log('All functions are finished');
});

window.runWith = () => {
  queue.add(next => {
    container.innerHTML += '<span class="orange">1</span>';

    setTimeout(() => {
      container.innerHTML += '<span class="blue">2</span>';
      setTimeout(next, 500);
    }, 1500);
  })
};

