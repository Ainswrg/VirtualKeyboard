import Keyboard from '../pages/keyboard';

class App {
  constructor(data) {
    this.data = data;
    this.container = document.body;
  }

  renderNewPage() {
    const page = new Keyboard(this.data);
    const pageHtml = page.render();
    this.container.append(pageHtml);
  }

  run() {
    this.renderNewPage();
  }
}

export default App;
