// const sections = document.getElementsByTagName('section');  // O/P : HTML Collection

const sections = document.querySelectorAll("section");   // O/P : Nodelist
console.log(sections)
console.log(sections[0])

// for (const section of sections) {
//     console.log(section)
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = "2px solid green";
//     section.style.fontSize = "20px";
//     section.style.padding = "20px"
//     section.style.marginBottom = "30px";
//     section.style.borderRadius = "13px";
//     section.style.boxShadow = "0 6px 18px 0 rgba(0,0,0,0.2)"
// }

for(const section of sections){
    section.classList.add("section-card")
}



const background = document.querySelector("body");
background.style.backgroundColor = "#dff9fb";

