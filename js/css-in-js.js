// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
console.log(sections)

for (const section of sections){
    console.log(section)
    section.style.backgroundColor = 'lightgreen'
    section.style.padding = '10px'
    section.style.border = '2px solid black'
    section.style.borderRadius = '12px'
    section.style.marginBottom = '12px'
}

let forStyle = document.getElementById('for-styles');
forStyle.style.color = "black"
forStyle.style.backgroundColor = "gold"
forStyle.style.padding = "10px"
forStyle.style.borderRadius = "8px"
forStyle.style.border = "1px solid black"
forStyle.style.boxShadow = "1px 1px 1px 1px gray"
forStyle.style.textAlign = 'center'




// dynamic class
// for(const section of sections){
//     section.classList.add('section-card')
// }