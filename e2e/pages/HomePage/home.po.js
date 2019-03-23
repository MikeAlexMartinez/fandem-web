const puppeteer = require('puppeteer');

const PAGE = 'http://localhost:7777/';

class HomePage {
  async openHome() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
  }

  async readTitle() {
    const titleSelector = ".title";
    await this.page.waitForSelector(titleSelector);
    const title = await this.page.evaluate(
      titleSelector => document.querySelector(titleSelector).innerText,
      titleSelector
    );
    return title;
  }

  async closePage() {
    await this.browser.close();
  }
}

export default HomePage;