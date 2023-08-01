import ru from './ru.js'
import kz from './kz.js'
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'ru',
    messages: {
        ru: ru,
        kz: kz
    }
});

export default i18n