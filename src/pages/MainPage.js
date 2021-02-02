import { router } from '../service/router';

const MainPage = async () => {
    const t = '<div>Main page</div> <a href="/library">Lib</a>'
    const root = document.querySelector('#root');

    root.insertAdjacentHTML('beforeend', t);

    eventHandler();
}

const eventHandler = () => {
    const link = document.querySelector('a');

    link.addEventListener('click', (event) => {
        event.preventDefault();
        router.navigate(event.currentTarget.getAttribute('href'))
    })
}

export default MainPage;
