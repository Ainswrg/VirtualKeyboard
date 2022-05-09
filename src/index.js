import 'normalize.css';
import './index.scss';
import getData from './core/data/language';
import App from './core/app/App';
import LocalLanguage from './utils/local';

const data = getData();
const lang = new LocalLanguage();
const language = lang.getLocalStorage() || 'ENG';

window.onload = () => {
  if (data) {
    const app = new App(data, language);
    app.run();

    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        if (e.key === 'Alt') {
          const currLang = app.switchLanguage();
          lang.setLocalStorage(currLang);
        }
      }
      if (e.key === 'CapsLock') {
        app.capsLock();
      }
    });
  }
};
