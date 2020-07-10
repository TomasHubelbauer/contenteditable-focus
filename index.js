window.addEventListener('load', () => {

});

class Editor extends HTMLElement {
  constructor() {
    super();
    const div = document.createElement('div');
    div.contentEditable = true;
    div.textContent = 'Hello, world!';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'index.css';
    this.attachShadow({ mode: 'closed' }).append(div, link);
  }
}

customElements.define('demo-editor', Editor);
