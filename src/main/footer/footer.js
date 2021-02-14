import './styles.css';
import footerOpen from './templates/footer_render.hbs';
import openStudentsModal from './templates/students-modal.hbs';


const markupFooterRef = document.querySelector('#footer')
markupFooterRef.insertAdjacentHTML('beforeend', footerOpen());


const studentOpenBtn = document.querySelector('.js-students');
studentOpenBtn.addEventListener('click', handleOpenStudentsWindow);

function handleOpenStudentsWindow() {
    markupFooterRef.insertAdjacentHTML('beforeend', openStudentsModal());
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

