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
      template += `<div class="row">`;
      if (this.language === 'ENG') {
        template += `${this.data
          .map((key) =>
            key.row === 1
              ? `
            <div class="${key.className}">
            ${
              key.key
                ? key.key
                : `
            <div class="${key.firstClassName}">${key.key__firstENG}</div>
            <div class="${key.secondClassName}">${key.key__secondENG}</div>`
            }
            </div>`
              : null
          )
          .join('')}`;
      }
      if (this.language === 'RU') {
        template += `${this.data
          .map((key) =>
            key.row === 1
              ? `
            <div class="${key.className}">
            ${
              key.key
                ? key.keyRU || key.key
                : `
            <div class="${key.firstClassName}">${key.key__firstRU}</div>
            <div class="${key.secondClassName}">${key.key__secondRU}</div>`
            }
            </div>`
              : null
          )
          .join('')}`;
      }
      template += `</div>`;
      template += `<div class="row">`;
      if (this.language === 'ENG') {
        template += `${this.data
          .map((key) =>
            key.row === 2
              ? `
            <div class="${key.className}">
            ${
              key.key
                ? key.key
                : `
            <div class="${key.firstClassName}">${key.key__firstENG}</div>
            <div class="${key.secondClassName}">${key.key__secondENG}</div>`
            }
            </div>`
              : null
          )
          .join('')}`;
      }
      if (this.language === 'RU') {
        template += `${this.data
          .map((key) =>
            key.row === 2
              ? `
            <div class="${key.className}">
            ${
              key.keyRU
                ? key.keyRU || key.key
                : `
            <div class="${key.firstClassName}">${key.key__firstRU}</div>
            <div class="${key.secondClassName}">${key.key__secondRU}</div>`
            }
            </div>`
              : null
          )
          .join('')}`;
      }
      template += `</div>`;
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 3
            ? `
          <div class="${key.className}">
          ${
            key.key
              ? `${this.language === 'ENG' ? key.key : key.keyRU || key.key}`
              : `
          <div class="${key.firstClassName}">${key.key__first}</div>
          <div class="${key.secondClassName}">${key.key__second}</div>`
          }
          </div>`
            : null
        )
        .join('')}`;
      template += `</div>`;
      if (this.language === 'ENG') {
        template += `<div class="row">`;
        template += `${this.data
          .map((key) =>
            key.row === 4
              ? `
            <div class="${key.className}">
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
      if (this.language === 'RU') {
        template += `<div class="row">`;
        template += `${this.data
          .map((key) =>
            key.row === 4
              ? `
            <div class="${key.className}">
            ${
              key.keyRU || key.key
                ? key.keyRU || key.key
                : `
            <div class="${key.firstClassName}">${key.key__firstRU}</div>
            <div class="${key.secondClassName}">${key.key__secondRU}</div>`
            }
            </div>`
              : null
          )
          .join('')}`;
        template += `</div>`;
      }
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 5
            ? `
          <div class="${key.className}">
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
