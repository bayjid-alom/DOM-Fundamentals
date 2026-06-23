console.log("=== SOME STYLES ====")

const members = document.querySelectorAll("#family-members div p");
console.log(members)  // NodeList(3) [p, p, p]
console.log(members[1])

for (const member of members) {
    member.style.color = "black";
    member.style.fontSize = "1.15rem";
    member.style.fontWeight = "900";
}


// Create another child
const heading = document.createElement("h2");
heading.innerText = "[Family Members]";

const membersParent = document.getElementById("family-members");
membersParent.appendChild(heading)
console.log(heading)
