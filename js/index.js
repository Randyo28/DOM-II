// Your code goes here

//window load
// window.addEventListener("load", function() {
//     console.log('loaded')
// });

// window.addEventListener('load', (e) => {
//     alert('Welcome to my page')
// })

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

// Logo click to change fontSize
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', (e) => {
    logo.style.fontSize = '2rem'
    
})


//Bus image mousedown
const busImage = document.querySelector('.intro img')
// console.log(busImage)
busImage.addEventListener('mousedown', (e) => {
    busImage.style.width = '80%'
})

//welcome h2 mouseUp
const welcome = document.querySelector('.intro h2')
welcome.addEventListener('mouseup', (e) => {
    welcome.style.fontSize = "7rem"
})

//doubleClick pTags
const pTags = document.querySelectorAll('p')
const newPtags = Array.from(pTags)
newPtags.forEach(item =>{
    item.addEventListener('dblclick', (e) =>{
        item.style.color = 'red'
    })
})

//keydown
const adventureImg = document.querySelector('.img-content img')
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        adventureImg.style.width = '50%'
    }
})

//keyup
const container = document.querySelector('.container .home')
document.addEventListener('keyup', (e) => {
    if(e.key === ''){
        container.style.maxWidth = '500px'
    }
})

//focus
newNav.forEach(item => {
    item.addEventListener('focus', (e) =>{
        item.style.backgroundColor = 'yellow'
    })
})

//gsap
// const destination = document.querySelector('.content-destination h2')
gsap.fromTo('.nav-link', {
    x: 300 
}, {
    x:0,
    duration: 2,
    stagger:1
})