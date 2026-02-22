console.log("Third Js File 👇")

// get the parent
const thirdList = document.getElementById('third-list');

// create the child
const li = document.createElement('li');
li.innerText = 'Item A - added';

thirdList.appendChild(li)
