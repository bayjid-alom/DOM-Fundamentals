console.log("Second Js File 👇")

const sections = document.getElementsByClassName('section-item');
console.log(sections)

for (const section of sections){
    console.log(section)
    section.style.backgroundColor = 'bisque'
    section.style.padding = '10px'
    section.style.border = '2px solid black'
    section.style.borderRadius = '12px'
    section.style.marginBottom = '12px'
}



// Query like CSS (Definite)

