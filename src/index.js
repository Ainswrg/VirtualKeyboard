import 'normalize.css';
import './index.scss';
import getData from './core/data/language';
import App from './core/app/App';

const data = getData();

window.onload = () => {
  if (data) {
    const app = new App(data);
    app.run();

    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        if (e.key === 'Alt') {
          app.switchLanguage(app);
        }
      }
      if (e.key === 'CapsLock') {
        app.capsLock();
      }
    });
  }
};
