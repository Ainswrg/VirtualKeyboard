import App from '../core/app/App';

class LocalLanguage extends App {
  setLocalStorage(value = this.language) {
    localStorage.setItem('language', JSON.stringify(value));
  }

  getLocalStorage() {
    const lang = JSON.parse(localStorage.getItem('language'));
    this.language = lang;
    return lang;
  }
}

export default LocalLanguage;
