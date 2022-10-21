import CONFIG from "../data/config";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

class RestaurantItem extends HTMLElement {
  set restaurantItem(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a class="resto" href="#/detail/${this.restaurant.id}">
        <div class="list-menu">
          <div class="rating">                
            <p>${this.restaurant.city}</p>  
          </div>
          <div class="kota">
            <p>${this.restaurant.rating}</p>
          </div>
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${this.restaurant.pictureId}" alt="${this.restaurant.name} Image">
          <h5 class="title">${this.restaurant.name}</h5>
          <h6 class="post-item__description">${this.restaurant.description}</h6>
        </div>
      </a>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
