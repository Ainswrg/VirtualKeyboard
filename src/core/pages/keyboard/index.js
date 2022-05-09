import Page from '../../templates/Page';

class Keyboard extends Page {
  constructor(data, language) {
    super(data, language);
    this.data = data;
    this.language = language;
  }

  generateContent() {
    let template = '';
    template += `<div class="content__container">`;
    template += `<textarea class="content__textarea"></textarea>`;
    template += `<div class="keyboard">`;
    template += `<div class="keyboard__container">`;
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
    template += `</div>`;
    template += `</div>`;
    template += `</div>`;

    return template;
  }

  render() {
    const content = this.generateContent();
    this.createHeader();
    this.createContent(content);
    this.createFooter();
    return this.wrapper;
  }
}

export default Keyboard;
