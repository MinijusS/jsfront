'use strict';

document.addEventListener('mouseleave', () => {
    togglePopup();
}, {once: true});

function togglePopup() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close-btn');
    
    popup.style.display = 'flex';

    addEventListener('click', e => {
        if(!e.target.closest('.popup')) {
            popup.style.display = 'none';
        }
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}