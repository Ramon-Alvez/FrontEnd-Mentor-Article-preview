const shareButton = document.querySelector('button.share-bttn')
const shareContainer = document.querySelector('section.share')

shareButton.addEventListener('click', () => {
    console.log('clicou')
    if (shareContainer.classList.contains('hidden')) {
        shareContainer.classList.remove('hidden')
        shareButton.classList.add('active')
    }
    else {
        shareContainer.classList.add('hidden')
        shareButton.classList.remove('active')
    } 
})