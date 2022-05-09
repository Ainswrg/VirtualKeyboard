import Keyboard from '../pages/keyboard';

class App {
  constructor(data, language) {
    this.data = data;
    this.language = language;
    this.container = document.body;
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
    const updateData = this.data.map((e) => {
      if (e.className === 'key letter') {
        if (e.key) {
          if (e.key === e.key.toUpperCase()) {
            e.key = e.key.toLowerCase();
          } else {
            e.key = e.key.toUpperCase();
          }
        }
        if (e.keyRU) {
          if (e.keyRU === e.keyRU.toUpperCase()) {
            e.keyRU = e.keyRU.toLowerCase();
          } else {
            e.keyRU = e.keyRU.toUpperCase();
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

    this.updateKeyboard(this.language, updateData);
  }

  switchLanguage() {
    if (this.language === 'ENG') {
      this.language = 'RU';
      this.updateKeyboard(this.language);
    } else if (this.language === 'RU') {
      this.language = 'ENG';
      this.updateKeyboard(this.language);
    }

    return this.language;
  }

  run() {
    this.renderNewPage();
  }
}

export default App;
