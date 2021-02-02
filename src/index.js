import MainPage from "./pages/MainPage";
import LibraryPage from "./pages/LibraryPage";
import { router } from './service/router';
import './styles.css';

router
    .on('/', () => {
        MainPage();
    })
    .on('/filter', () => {
        console.log('filter')
    })
    .on('/library', () => {
        LibraryPage();
    });

// /filter?category=car
