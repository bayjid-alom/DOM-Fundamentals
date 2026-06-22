console.log("=== SOME STYLES ====")

const members = document.querySelectorAll("#family-members div p");
console.log(members)  // NodeList(3) [p, p, p]
console.log(members[1])

for (const member of members) {
    member.style.color = "black";
    member.style.fontSize = "1.15rem";
    member.style.fontWeight = "900";
}