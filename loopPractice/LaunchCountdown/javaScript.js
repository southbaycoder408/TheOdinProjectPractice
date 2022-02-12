let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
while (i >= 0) {

    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}...`;
    } 
    else if(i < 10 && i > 0) {
        para.textContent = `${i}...`;
    }
    else{
        para.textContent = "Blast Off!!!";
    }
    i--;
    output.appendChild(para);
}

// const para = document.createElement('p');
// para.textContent = ;
//output.appendChild(para);