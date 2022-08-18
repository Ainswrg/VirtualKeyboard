import Page from '../../templates/Page';

class KeyboardPage extends Page {
  constructor(data, language) {
    super(data, language);
    this.data = data;
    this.language = language;
    this.contentContainer = document.createElement('div');
    this.textArea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
  }

  generateContent() {
    this.contentContainer.classList.add('content__container');
    this.keyboard.classList.add('keyboard');
    return this.contentContainer;
  }

  generateTextArea() {
    this.textArea.classList.add('content__textarea');
    this.textArea.id = 'textarea';
    this.textArea.placeholder = `
    Virtual Keyboard for Windows
    Shift + Alt shortcut to change the keyboard language`;

    return this.textArea;
  }

  generateKeyboard() {
    const container = document.createElement('div');
    container.classList.add('keyboard__container');
    let template = '';
    if (this.data) {
      for (let i = 1; i <= 5; i += 1) {
        template += `<div class="row">`;
        template += `${this.data
          .map((key) =>
            key.row === i
              ? `
              <div class="${key.className}" id="${key.code}">
              ${
                key.key
                  ? key.key
                  : `
              <div class="${key.firstClassName}">${key.key__first}</div>
              <div class="${key.secondClassName}">${key.key__second}</div>`
              }
              </div>`
              : null
          )
          .join('')}`;
        template += `</div>`;
      }
    }
    container.innerHTML = template;
    return container;
  }

  render() {
    const content = this.generateContent();
    this.keyboard.append(this.generateKeyboard());
    content.append(this.generateTextArea());
    content.append(this.keyboard);
    this.createHeader();
    this.createContent(content);
    this.createFooter();
    return this.wrapper;
  }
}

export default KeyboardPage;
