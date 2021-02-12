import { alert, success, error, info} from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 2000;
defaults.width = "430px";

if (window.outerWidth < 768) {
    defaults.width = "280px";
}

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
    },

    noAuthMessage() {
        error({
            title: "OШИБКА",
            text: "ВЫ НЕ ЗАРЕГИСТРИРОВАНЫ!"
        })
    },

    authMessage() {
        alert({
            title: "ВЫ АВТОРИЗИРОВАНЫ!",
            text: "ВОЙДИТЕ В ЛИЧНЫЙ КАБИНЕТ"
        })
    }
};


