

let bookmarks = document.querySelectorAll('.bookmark i')

bookmarks.forEach((i) => {
    i.addEventListener('click', () => {
        console.log('click!', i)

        i.classList.toggle('fa-regular');
        i.classList.toggle('fa-solid');

    })
})

let btns = document.querySelectorAll('section .btn-light')
let answers = document.querySelectorAll('section p')
btns.forEach((button, index) => {
    button.addEventListener('click', () => {
        answers[index].classList.toggle('hidden')
        // if (button.innerText === 'Show Answer') {
        //     button.innerHTML = '<span>Hide Answer</span>'        
        // } else {
        //     button.innerHTML = '<span>Show Answer</span>'
        // }
        // button.innerText = button.innerText === 'Show Answer' ? 'Hide Answer' : 'Show Answer'

        button.innerText === 'Show Answer' ? button.innerText = 'Hide Answer' : button.innerText = 'Show Answer'
    })
})
