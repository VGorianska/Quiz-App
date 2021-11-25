

let bookmarks = document.querySelectorAll('.bookmark i') 

bookmarks.forEach((i) => {
    i.addEventListener('click',() => {
        console.log('click!', i) 

        i.classList.toggle('fa-regular');

    })
})


