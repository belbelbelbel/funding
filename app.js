// const back = document.querySelector("#back")
// const modals = document.querySelector("#modals")
// const closemodal = document.querySelector("#closemodal")
// const bookmark = document.querySelector("bookmark")

// function OpenModal() {
//     console.log("fdgdgh")
//     modals.classList.add("show")
// }

const back = document.getElementById('back')
const openModals = document.getElementById('modals')
const closeModal = document.getElementById('closemodal')

back.addEventListener('click', () => {
    openModals.classList.add('show')
})

closeModal.addEventListener('click', () => {
    openModals.classList.remove('show')
})
