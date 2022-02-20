const container = document.querySelector('#container');
const para = document.createElement('p');
para.classList.add('content');
// para.style.color = 'red';
// para.textContent = "Hey I'm Red";

// const h3 = document.createElement('h3');
// h3.classList.add('content');
// h3.style.color = 'blue';
// h3.textContent = "I'm a blue h3!";

 container.appendChild(para);
// container.appendChild(h3);

const divBlackPink = document.createElement('div');
divBlackPink.classList.add('content');
divBlackPink.style.backgroundColor = 'pink';
divBlackPink.style.border = '1px solid black';
divBlackPink.width = '100px';
divBlackPink.height = '100px';

const h1 = document.createElement('h1');
h1.classList.add('content');
h1.textContent = "I'm in a div!";

const pToo = document.createElement('pToo');
pToo.classList.add('content');
pToo.textContent = "ME TOO!";

divBlackPink.appendChild(h1);
divBlackPink.appendChild(pToo);
container.appendChild(divBlackPink);