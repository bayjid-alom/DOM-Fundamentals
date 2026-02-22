// 1. parent node
const mainContainer = document.getElementById('main-container');

// 2. create child node
const placesSection = document.createElement('section');

// 3. create h1
const h1 = document.createElement('h1');
h1.innerText = "Places I want to visit"
placesSection.appendChild(h1)

// create ul
const placesUl = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Chottogram';
placesUl.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'CoxsBazar';
placesUl.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Mymensingh';
placesUl.appendChild(li3)

placesSection.appendChild(placesUl)

// 3. append placesSection to the container
mainContainer.appendChild(placesSection)




// Easier to create HTML
const booksSection = document.createElement('section');

booksSection.innerHTML = `
    <h1> Books I need to Read </h1>
    <ul>
    <li>Physics </li>
    <li>Chemistry </li>
    <li>Mathematics </li>
    </ul>
`

mainContainer.appendChild(booksSection)
