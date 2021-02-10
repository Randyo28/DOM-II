// Your code goes here
const nav = document.querySelector('.main-navigation')
const navLink = document.querySelectorAll('.nav-link')
const logo = document.querySelector('.logo-heading')
const busImage = document.querySelector('.intro img')
const welcome = document.querySelector('.intro h2')
const pTags = document.querySelectorAll('p')
const adventureImg = document.querySelector('.img-content img')

//window load
// window.addEventListener("load", function() {
//     console.log('loaded')
// });

// window.addEventListener('load', (e) => {
//     alert('Welcome to my page')
// })

//Nav


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
logo.addEventListener('click', (e) => {
    //My propagation stop event - this is childNode
    e.stopPropagation()
    logo.style.fontSize = '2rem'
})

nav.addEventListener('click', (e) => {
    //this is parentNode
    nav.style.width = '50%'
})


//Bus image mousedown
// console.log(busImage)
busImage.addEventListener('mousedown', (e) => {
    busImage.style.width = '80%'
})

//welcome h2 mouseUp
welcome.addEventListener('mouseup', (e) => {
    welcome.style.fontSize = "7rem"
})

//doubleClick pTags
const newPtags = Array.from(pTags)
newPtags.forEach(item =>{
    item.addEventListener('dblclick', (e) =>{
        item.style.color = 'red'
    })
})

//keydown
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        adventureImg.style.width = '50%'
    }
})

//keyup
// const nav = document.querySelector('.main-navigation')
document.addEventListener('keyup', (e) => {
    if(e.key === 'Shift'){
        nav.style.backgroundColor = 'green'
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
    stagger:0.3
})