function handlerKeydown(event) {
    if (event.code === 'Escape') {
        handlerModalClose();
    }
}

function handlerModalClose() {  
    window.removeEventListener('keydown', handlerKeydown);

    document.querySelector(".backdrop-add").remove();
}

function handlerBackdropClick(event) {
    if (event.target.className !== 'backdrop-add') {
       return
    }
    handlerModalClose();
}

export { handlerKeydown,  handlerModalClose, handlerBackdropClick};