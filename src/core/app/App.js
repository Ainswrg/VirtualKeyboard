import Keyboard from '../pages/keyboard';
import Data from '../data/language';

const dataLang = new Data();
const [engData, ruData] = dataLang.getData();
class App {
  constructor() {
    this.data = '';
    this.language = '';
    this.container = document.body;
    this.keyboardContainer = document.querySelector('.keyboard');
  }

  setLocalStorage(value = this.language) {
    localStorage.setItem('language', JSON.stringify(value));
  }

  getLocalStorage() {
    const lang = JSON.parse(localStorage.getItem('language'));
    this.language = lang;
    return lang;
  }

  updateDataAndLang(data, language) {
    this.data = data;
    this.language = language;
  }

  renderNewPage() {
    const page = new Keyboard(this.data, this.language);
    const pageHtml = page.render();
    this.container.append(pageHtml);
  }

  updateKeyboard(language, data = this.data) {
    this.container.innerHTML = '';
    const page = new Keyboard(data, language);
    const pageHtml = page.render();
    this.container.append(pageHtml);
  }

  capsLock() {
    const dataToCaps = (data) => {
      const res = data.map((e) => {
        if (e.className === 'key letter') {
          if (e.key) {
            if (e.key === e.key.toUpperCase()) {
              e.key = e.key.toLowerCase();
            } else {
              e.key = e.key.toUpperCase();
            }
          }
        }
        if (e.className === 'key caps-lock') {
          e.className = 'key caps-lock focused';
        } else if (e.className === 'key caps-lock focused') {
          e.className = 'key caps-lock';
        }
        return e;
      });
      return res;
    };
    const ru = dataToCaps(ruData);
    const eng = dataToCaps(engData);

    const updateData = this.language === 'ENG' ? eng : ru;

    this.updateKeyboard(this.language, updateData);
  }

  switchLanguage() {
    if (this.language === 'ENG') {
      this.language = 'RU';
      const newData = this.language === 'ENG' ? engData : ruData;
      this.updateDataAndLang(newData, this.language);
      this.updateKeyboard(this.language, this.data);
    } else if (this.language === 'RU') {
      this.language = 'ENG';
      const newData = this.language === 'ENG' ? engData : ruData;
      this.updateDataAndLang(newData, this.language);
      this.updateKeyboard(this.language, this.data);
    }
    return this.language;
  }

  addListeners() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.shiftKey) {
        if (e.key === 'Alt') {
          const currLang = this.switchLanguage();
          this.setLocalStorage(currLang);
        }
      }
      if (e.key === 'CapsLock') {
        this.capsLock();
      }
    });
  }

  run() {
    const languageLocal = this.getLocalStorage() || 'ENG';
    const dataLanguage = languageLocal === 'ENG' ? engData : ruData;
    this.updateDataAndLang(dataLanguage, languageLocal);
    this.addListeners();
    this.renderNewPage();
  }
}

export default App;
