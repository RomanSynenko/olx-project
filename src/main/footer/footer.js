import './style/style.scss';
import footerOpen from './templates/footer_render.hbs';
import openStudentsModal from './templates/students-modal.hbs';
const markupFooterRef = document.querySelector('#footer');
const rootRef = document.querySelector('#root');


function renderFooter() {
    markupFooterRef.insertAdjacentHTML('beforeend', footerOpen());
    exportModalFooter();
}

function handleOpenStudentsWindow() {
    rootRef.insertAdjacentHTML('beforeend', openStudentsModal());
    
    document.body.classList.add('overflow');
    const modalRef = document.querySelector('.student-modal')
    modalRef.classList.add('show-modal');
    window.addEventListener('keydown', handleKeypress)
    const studentCloseBtn = document.querySelector('.student-modal__close-btn')
    studentCloseBtn.addEventListener('click', handleCloseStudentsWindow)
    function handleCloseStudentsWindow(event) {
        event.preventDefault();
        modalRef.classList.remove('show-modal');
        document.querySelector('.backdrop-add').remove();
        document.body.classList.remove('overflow');
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
    code === 'click' && handleOpenStudentsWindow();
}
const windowWidth = document.documentElement.clientWidth;

function exportModalFooter() {
    if (windowWidth > 767) {
        const studentOpenBtn = document.querySelector('.js-students');
        studentOpenBtn.addEventListener('click', handleOpenStudentsWindow);
        return
    }
}

export default renderFooter;