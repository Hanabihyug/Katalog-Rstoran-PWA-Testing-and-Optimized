class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>Copyright © 2022 - Find Warunk</p>
    </footer>
            `;
  }
}

customElements.define('footer-app', FooterApp);
