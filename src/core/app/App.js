import KeyboardPage from '../pages/keyboard';
import Data from '../data/language';

const dataLang = new Data();
const [engData, ruData] = dataLang.getData();
class App {
  constructor() {
    this.data = '';
    this.language = '';
    this.container = document.body;
    this.display = '';
    this.keyboard = '';
    this.caps = '';
  }

  keyboardPage(data = this.data, language = this.language) {
    const page = new KeyboardPage(data, language);
    return page;
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
    const page = this.keyboardPage(this.data, this.language);
    const pageHtml = page.render();
    this.container.append(pageHtml);
  }

  updateKeyboard(language, data = this.data) {
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';
    const page = this.keyboardPage(data, language);
    const pageHtml = page.generateKeyboard();
    keyboard.append(pageHtml);
    this.keyboard = keyboard;
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

  printKeys(keyCode, value, option) {
    this.display = document.querySelector('#textarea');
    let cursor = this.display.selectionStart;
    const left = this.display.value.slice(0, cursor);
    const right = this.display.value.slice(cursor);

    let select;
    const start = this.display.selectionStart;
    const end = this.display.selectionEnd;

    select = start === end ? null : this.display.value.slice(start, end);
    const displayVal = (sel, val, opt) => {
      if (sel) {
        this.display.setRangeText((select = val));
      } else if (opt === 'backspace') {
        this.display.value = left.slice(0, -1) + right;
      } else if (opt === 'delete') {
        this.display.value = left + right.slice(1);
      } else {
        const shift = document.querySelector('#ShiftLeft');
        const caps = document.querySelector('#CapsLock');
        if (caps.classList.contains('focused')) {
          if (shift.classList.contains('active')) {
            this.display.value = `${left}${val.toLowerCase()}${right}`;
          } else {
            this.display.value = `${left}${val.toUpperCase()}${right}`;
          }
        } else if (!caps.classList.contains('focused')) {
          if (shift.classList.contains('active')) {
            this.display.value = `${left}${val.toUpperCase()}${right}`;
          } else {
            this.display.value = `${left}${val.toLowerCase()}${right}`;
          }
        }
      }
    };

    switch (keyCode) {
      case 'CapsLock': {
        this.capsLock();
        const keyId = document.querySelector(`#CapsLock`);
        keyId.classList.add('active');
        break;
      }
      case 'Backspace': {
        const backspace = '';
        displayVal(select, backspace, 'backspace');
        cursor -= 1;
        break;
      }
      case 'Delete': {
        const del = '';
        displayVal(select, del, 'delete');
        break;
      }
      case 'Enter': {
        const enter = '\n';
        displayVal(false, enter);
        cursor += 1;
        break;
      }
      case 'Tab': {
        const tab = '\t';
        displayVal(select, tab);
        cursor += 1;
        break;
      }
      case 'Space': {
        const space = ' ';
        displayVal(select, space);
        cursor += 1;
        break;
      }
      case 'ArrowLeft': {
        cursor = cursor - 1 >= 0 ? cursor - 1 : 0;
        break;
      }
      case 'ArrowRight': {
        cursor += 1;
        break;
      }
      case 'ArrowDown': {
        const arrRows = right.split('\n');
        const row = arrRows.length - (arrRows.length - 1);
        if (arrRows[row]) {
          cursor += arrRows[row].length + 1;
        } else {
          return;
        }
        break;
      }
      case 'ArrowUp': {
        const arrRows = left.split('\n');
        let row = arrRows.length - 1;
        if (row >= 1) {
          cursor -= arrRows[row].length + 1;
          row -= 1;
        }
        break;
      }
      case 'ShiftLeft':
      case 'ShiftRight': {
        const keyArr = document.querySelectorAll('.letter');
        if (option === 'shift') {
          keyArr.forEach((keyLetter) => {
            keyLetter.classList.add('upperCase');
          });
        }
        break;
      }
      case 'AltLeft':
      case 'AltRight': {
        if (option === 'shift') {
          const currLang = this.switchLanguage();
          this.setLocalStorage(currLang);
        }
        break;
      }
      case 'ControlLeft':
      case 'ControlRight': {
        break;
      }
      case 'MetaLeft':
      case 'MetaRight': {
        break;
      }
      default: {
        displayVal(false, value);
        cursor += 1;
      }
    }
    this.display.focus();
    this.display.setSelectionRange(cursor, cursor);
  }

  dataKeyboardEvent(e, opt) {
    this.data.forEach((key) => {
      let currKey = '';
      if (e.code === key.code) {
        const keyId = document.querySelector(`#${key.code}`);
        keyId.classList.add('active');
        if (opt === 'add') {
          if (e.shiftKey) {
            if (keyId.classList.contains('letter')) {
              currKey = key.key.toUpperCase() || key.key__first;
            } else {
              currKey = key.key || key.key__first;
            }
            this.printKeys(key.code, currKey, 'shift');
          } else if (e.ctrlKey) {
            currKey = key.key || key.key__second;
            this.printKeys(key.code, currKey, 'ctrl');
          } else {
            currKey = key.key || key.key__second;
            this.printKeys(key.code, currKey);
          }
        } else {
          keyId.classList.remove('active');
        }
      }

      const eKey = [...e.path].length === 12 ? [...e.path][0].id : [...e.path][1].id;
      if (key.code === eKey) {
        const keyId = document.querySelector(`#${key.code}`);
        keyId.classList.add('active');
        currKey = key.key || key.key__second;
        if (opt === 'add') {
          if (e.shiftKey) {
            if (keyId.classList.contains('letter')) {
              currKey = key.key.toUpperCase() || key.key__first;
            } else {
              currKey = key.key || key.key__first;
            }
            this.printKeys(key.code, currKey, 'shift');
          } else if (eKey === 'ShiftLeft' || eKey === 'ShiftRight') {
            if (keyId.classList.contains('letter')) {
              currKey = key.key.toUpperCase() || key.key__first;
            } else {
              currKey = key.key || key.key__first;
            }
            this.printKeys(key.code, currKey, 'shift');
          } else {
            this.printKeys(key.code, currKey);
          }
        } else {
          keyId.classList.remove('active');
        }
      }
    });
  }

  checkCapsLock(arr, opt) {
    const caps = document.querySelector('#CapsLock');
    this.caps = caps;
    arr.forEach((keyLetter) => {
      if (opt === 'add') {
        if (caps.classList.contains('focused')) {
          keyLetter.classList.add('lowerCase');
        }
      }
      if (opt === 'del') {
        if (caps.classList.contains('focused')) {
          keyLetter.classList.remove('lowerCase');
        }
        keyLetter.classList.remove('upperCase');
      }
    });
  }

  addListeners() {
    window.addEventListener('keydown', (e) => {
      const keyArr = document.querySelectorAll('.letter');
      e.preventDefault();
      this.dataKeyboardEvent(e, 'add');
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.checkCapsLock(keyArr, 'add');
      }
    });
    window.addEventListener('keyup', (e) => {
      const keyArr = document.querySelectorAll('.letter');
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.checkCapsLock(keyArr, 'del');
      }
      this.dataKeyboardEvent(e);
    });
    window.addEventListener('mousedown', (e) => {
      this.dataKeyboardEvent(e, 'add');
      const eKey = [...e.path].length === 12 ? [...e.path][0].id : [...e.path][1].id;
      const keyArr = document.querySelectorAll('.letter');
      if (eKey === 'ShiftLeft' || eKey === 'ShiftRight') {
        this.checkCapsLock(keyArr, 'add');
      }
    });
    window.addEventListener('mouseup', (e) => {
      this.dataKeyboardEvent(e);
      const eKey = [...e.path].length === 12 ? [...e.path][0].id : [...e.path][1].id;
      const keyArr = document.querySelectorAll('.letter');
      if (eKey === 'ShiftLeft' || eKey === 'ShiftRight') {
        this.checkCapsLock(keyArr, 'del');
      }
    });
  }

  run() {
    const languageLocal = this.getLocalStorage() || 'ENG';
    const dataLanguage = languageLocal === 'ENG' ? engData : ruData;
    this.updateDataAndLang(dataLanguage, languageLocal);
    this.renderNewPage();
    this.addListeners();
  }
}

export default App;
