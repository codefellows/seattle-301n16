'use strict';

// let likeButtons = document.getElementsByTagName('button');

let likeButtons = $('button');

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', likeMe);
  // likeButtons[i].on('click', likeMe);
  // this breaks it. If I get rid of the [i] then the counter goes up by the number of characters, which is cool and egalitarian and Roger would deeply approve, but John is grading, not Roger. So... 
}

function likeMe(e) {
  let character = e.target.parentNode;
  let counter = character.getElementsByTagName('span')[0];
  // let counter = $('span');
  // this also breaks it as does character.$(span)
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
}
