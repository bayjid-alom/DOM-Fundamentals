console.log("Append connected |========")

// 1. parent node
const mainContainer = document.getElementById("main-container");

// create child node
const placeSection = document.createElement("section")

// create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit."
placeSection.appendChild(h1)

const ul = document.createElement("ul");
placeSection.appendChild(ul)

const li1 = document.createElement("li");
li1.innerText = "Bandarban";
ul.appendChild(li1)

const li2 = document.createElement("li");
li2.innerText = "Cox'sBazar";
ul.appendChild(li2)

const li3 = document.createElement("li")
li3.innerText = "Sundarban";
ul.appendChild(li3)



// 3. append child to the parent
mainContainer.appendChild(placeSection)
placeSection.classList.add("section-card")





// EASIER TO CREATE
const bookSection = document.createElement("section")
bookSection.innerHTML = `
  <h2>My Favorite Coding Books</h2>

    <ul>
        <li>Eloquent JavaScript</li>
        <li>You Don't Know JS</li>
        <li>Clean Code</li>
        <li>The Pragmatic Programmer</li>
        <li>HTML & CSS: Design and Build Websites</li>
    </ul>
`

mainContainer.appendChild(bookSection)
bookSection.classList.add("section-card")

