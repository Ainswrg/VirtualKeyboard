import eng from './eng.json';
import ru from './ru.json';

class Data {
  constructor(language) {
    this.language = language;
    this.eng = eng;
    this.ru = ru;
  }

  getData() {
    const engData = this.eng.map((e) => {
      if (e.className === 'key letter') {
        if (e.key) {
          e.key = e.key.toLowerCase();
        }
      }
      return e;
    });
    const ruData = this.ru.map((e) => {
      if (e.className === 'key letter') {
        if (e.key) {
          e.key = e.key.toLowerCase();
        }
      }
      return e;
    });
    return [engData, ruData];
  }
}

export default Data;
