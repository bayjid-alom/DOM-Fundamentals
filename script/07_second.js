console.log("From second.")

// getElementsByClassName
const sections = document.getElementsByClassName("section-item");
console.log(sections)




// Styles
for(const section of sections){
    section.classList.add("section-design");
}




