console.log("Child |===========")
/***** 
1. create element → document.createElement("tag")
2. add content → element.innerText / innerHTML
3. select parent → document.querySelector("parent")
4. append element → parent.appendChild(element)     *****/


// ✔️ 3 important tasks : to crate a new element

// 01. created clement and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "This is new child."

// 02. find the parent where you will add the child
const playersList = document.getElementById("player-list");

// 03. append the child to the parent
playersList.appendChild(newChild)




// Styles way -01
newChild.classList.add("child-styles");
// Styles way -02
newChild.style.padding = "6px";
newChild.style.borderLeft = "2px solid black"

