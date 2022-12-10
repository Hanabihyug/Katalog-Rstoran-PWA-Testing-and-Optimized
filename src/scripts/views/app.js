/* eslint-disable no-use-before-define */
import DrawerInitiator from '../utils/drawer-initiator';
import DarkMode from '../utils/dark-theme';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, toggle, theme,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._toggle = toggle;
    this._theme = theme;

    this._initialAppShell();
    this._initialDarkMode();
  }

  _initialDarkMode() {
    DarkMode.init({
      toggle: this._toggle,
      theme: this._theme,
    });
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      // Tampilkan informasi disini atau arahkan ke halaman utama
    }
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
