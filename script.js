const body = document.querySelector('body');

body.addEventListener('mouseleave', () => {
    togglePopup();
}, {once: true});

function togglePopup() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close-btn');
    
    popup.style.display = 'flex';

    addEventListener('click', e => {
        if(e.target.closest('.popup') === null) {
            popup.style.display = 'none';
        }
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}