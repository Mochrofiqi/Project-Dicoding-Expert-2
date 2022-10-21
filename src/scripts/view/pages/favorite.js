/* eslint-disable */
import Swal from "sweetalert2";
import LocalData from "../../data/local-data";
import '../../component/restaurant-list'

class Favorite {
  static async render() {
    return `
      <section class="hero">
        <picture>
          <source media="(min-width:601px)" srcset="./images/heros/hero-image_2-large.jpg">
          <source media="(max-width:600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img src="./images/heros/hero-image_2-large.jpg" alt="Heroes Image">
        </picture>

        <h1 class="hero-judul">Your Favorite Restoran Fast Food!</h1>
      </section>
            
        <div class="favorite" id="content" tabindex="0">
        <h2 id="emptyData" class="no-favorite">Sorry No Favorite Restaurants Yet!</h2>

            <restaurant-list class="menu-list"></restaurant-list>
        </div>
    `;
  }

  static async afterRender() {
    // const heroElement = document.querySelector(".hero");
    const restaurantListElement = document.querySelector("restaurant-list");
    const favoriteResto = await LocalData.getAllSaved();
    const emptyData = document.querySelector('#emptyData');

    // heroElement.style.backgroundImage = "url('./images/heros/hero-image_2.jpg')";

    if (favoriteResto.length == 0) {
      Swal.fire({
        text: "No Favorite Restaurants Yet!",
        icon: "warning",
      });
    }

    if (favoriteResto.length > 0){
      emptyData.style.display = 'none';
    }

    restaurantListElement.restaurants = favoriteResto;
  }
}

export default Favorite;
