function handlerKeydown(event) {
    if (event.code === 'Escape') {
        handlerModalClose();
    };
}

function handlerModalClose() {  
    window.removeEventListener('keydown', handlerKeydown);

    removeBackdrop();
};

function handlerBackdropClick(event) {
    if (event.target.className !== 'backdrop-add') {
        return;
    };

    handlerModalClose();
};

function removeBackdrop() {    
    document.body.classList.remove('overflow');
    document.querySelector('.backdrop-add').remove();
};

export { handlerKeydown,  handlerModalClose, handlerBackdropClick, removeBackdrop };