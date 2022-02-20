const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', () => {
  alert("Hello World");
});