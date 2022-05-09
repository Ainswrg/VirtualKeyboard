import Page from '../../templates/Page';

class Keyboard extends Page {
  generateContent() {
    let template = '';
    template += `<div class="content__container">`;
    template += `<textarea class="content__textarea"></textarea>`;
    template += `<div class="keyboard">`;
    template += `<div class="keyboard__container">`;
    if (this.data) {
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 1
            ? `
          <div class="${key.className}">
          ${
            key.key !== false
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
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 2
            ? `
          <div class="${key.className}">
          ${
            key.key !== false
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
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 3
            ? `
          <div class="${key.className}">
          ${
            key.key !== false
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
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 4
            ? `
          <div class="${key.className}">
          ${
            key.key !== false
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
      template += `<div class="row">`;
      template += `${this.data
        .map((key) =>
          key.row === 5
            ? `
          <div class="${key.className}">
          ${
            key.key !== false
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
