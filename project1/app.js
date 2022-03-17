const smileFace = document.querySelector('.closed');
const grinFace = document.querySelector('.open');

// Add event listner
smileFace.addEventListener('click', () => {
    if(grinFace.classList.contains('open')) {
        grinFace.classList.add('active');
        smileFace.classList.remove('active');
    }
});

grinFace.addEventListener('click', () => {
    if(smileFace.classList.contains('closed')) {
        smileFace.classList.add('active');
        grinFace.classList.remove('active');
    }
});