// Your code goes here
const pTags = document.querySelectorAll('p')

window.addEventListener("load", function() {
    console.log('loaded')
});

//Nav
const navLink = document.querySelectorAll('.nav-link')

const newNav = Array.from(navLink)
console.log(newNav)

//Mouse over nav-links to change color
newNav.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        item.style.color = 'blue'
    })

    item.addEventListener('mouseleave', (e) =>{
        item.style.color = 'black'
    })
})

// Logo load
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', (e) => {
    logo.style.fontSize = '2rem'
    
})


//Bus image
const busImage = document.querySelector('.intro img')
// console.log(busImage)
busImage.addEventListener('wheel', (e) => {
    busImage.style.transform = '5'
})