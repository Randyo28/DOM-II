const allBlocks = document.querySelectorAll('.block')

const newBlocks = Array.from(allBlocks)


newBlocks.forEach(block => {
    block.addEventListener('mousedown', (e) => {
        block.style.transform = 'translate(100px) skew(5deg)'
        block.style.transition = '1s'
    })


    block.addEventListener('mouseup', (e) => {
        block.style.transform = 'translate(0px) skew(0)'
        block.style.transition = '3s'
    })

    block.addEventListener('click', (e) => {
        block.style.transform = 'translate(0px, -50px)'
    })

})