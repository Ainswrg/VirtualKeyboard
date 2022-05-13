class Page {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.header = document.createElement('header');
    this.header.classList.add('header');
    this.main = document.createElement('main');
    this.main.className = 'main';
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
  }

  createHeader() {
    this.wrapper.append(this.header);
  }

  createContent(content) {
    const contentPage = document.createElement('section');
    contentPage.className = 'content';
    contentPage.append(content);
    this.main.append(contentPage);
    this.wrapper.append(this.main);
  }

  createFooter() {
    let template = '';
    template += `<div class="footer__container">`;
    template += `<div class="footer__logo">`;
    template += `<a href="https://rs.school/">`;
    template += `<div class="school-logo"></div>`;
    template += `</a>`;
    template += `</div>`;
    template += `<div class="footer__author">Copyright 2022, Original`;
    template += `<a href="https://github.com/Ainswrg"> Jaslan D</a>`;
    template += `</div>`;
    template += `</div>`;
    this.footer.innerHTML = template;
    this.wrapper.append(this.footer);
  }

  render() {
    return this.wrapper;
  }
}

export default Page;
