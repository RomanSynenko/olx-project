import { alert, success, error, info} from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core'
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 2000;

export default {
    successMessage() {
        success({
            title: "РЕГИСТРАЦИЯ УСПЕШНА!",
            text: "ПОЖАЛУЙСТА, ВОЙДИТЕ В ЛИЧНЫЙ КАБИНЕТ"
        })
    },

    errorMessage() {
        error({
            title: "ОШИБКА",
            text: "НЕПРАВИЛЬНЫЙ ЛОГИН ИЛИ ПАРОЛЬ"
        })
    },

    alertMessage() {
        alert({
            title: "ТАКОЙ ЛОГИН УЖЕ СУЩЕСТВУЕТ",
            text: "ПОПРОБУЙТЕ ЕЩЕ РАЗ"

        })
    },

    infoMessage() {
        info({
            title: "ДОБРО ПОЖАЛОВАТЬ!",
            text: "ВХОД УСПЕШНО ВЫПОЛНЕН"
        })
    }
};


