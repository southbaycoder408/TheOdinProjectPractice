"use strict";
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const person of people) {
    if(person == "Phil" || person == "Lola"){ //If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space
        refused.textContent += person + ", ";
    }
    else{ //If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.

        admitted.textContent += person + ", ";
    }
} 

refused.textContent = refused.textContent.replace("a, ","a");
admitted.textContent = admitted.textContent.replace("ce, ","ce");