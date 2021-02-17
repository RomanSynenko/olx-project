import './style/style.scss';
import footerOpen from './templates/footer_render.hbs';
import openStudentsModal from './templates/students-modal.hbs';
const markupFooterRef = document.querySelector('#footer');
const rootRef = document.querySelector('#root');
markupFooterRef.insertAdjacentHTML('beforeend', footerOpen());



const studentOpenBtn = document.querySelector('.js-students');


function handleOpenStudentsWindow() {
    rootRef.insertAdjacentHTML('beforeend', openStudentsModal());
    const modalRef = document.querySelector('.student-modal')
    modalRef.classList.add('show-modal');
    window.addEventListener('keydown', handleKeypress)
    const studentCloseBtn = document.querySelector('.student-modal__close-btn')
    studentCloseBtn.addEventListener('click', handleCloseStudentsWindow)
    function handleCloseStudentsWindow(event) {
        event.preventDefault()
        modalRef.classList.remove('show-modal')
        window.removeEventListener('keypress', handleKeypress)
    }
    const onCloseESC = (event) => {
        if (event.key === 'Escape') {
            handleCloseStudentsWindow(event);
            return
        }
    };
    window.addEventListener('keydown', onCloseESC);
}

function handleKeypress({ code }) {
    code === 'click' && handleOpenStudentsWindow()
}
const windowWidth = document.documentElement.clientWidth;
function exportModalFooter() {
    if (windowWidth > 768) {
        studentOpenBtn.addEventListener('click', handleOpenStudentsWindow);
    }
    else if (windowWidth < 768) {
        return
    }
}
export default exportModalFooter;