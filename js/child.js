
// node text , element. DOM - like tree, 
document.getElementById('players-container').childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode 

// document.createElement('h1')     // dock



// Create element and set innerText
const newChild = document.createElement('li');
newChild.innerText = 'Williamson';

// find the parent where you will add the child
const playersList = document.getElementById('players-ul');

// appent the child
playersList.appendChild(newChild);

