'use strict';

// write your code here

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    const onClick = () => {
      logo.removeEventListener('click', onClick);
      resolve('Promise was resolved!');
    };

    logo.addEventListener('click', onClick);
  } else {
    reject(new Error('Promise not found!'));
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

Promise.race([promise1, promise2])
  .then((msg) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = msg;
    document.body.append(div);
  })
  .catch((msg) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = msg;
    document.body.append(div);
  });
