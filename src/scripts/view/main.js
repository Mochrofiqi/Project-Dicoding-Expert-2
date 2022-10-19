import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class Main {
  static async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    const mainContent = document.querySelector('main');
    mainContent.innerHTML = await page.render();

    await page.afterRender();

    const skipContentElement = document.querySelector('.skip');    
    skipContentElement.addEventListener('click', (event) => {      
    event.preventDefault();
    document.querySelector('#content').focus();
  });
  }
}

export default Main;
