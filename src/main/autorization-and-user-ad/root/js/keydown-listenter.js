function handlerKeydown(event) {
    if (event.code === 'Escape') {
        handlerModalClose();
    }
}

function handlerModalClose() {  
    window.removeEventListener('keydown', handlerKeydown);

    document.querySelector(".backdrop-add").remove();
}

export default handlerKeydown;