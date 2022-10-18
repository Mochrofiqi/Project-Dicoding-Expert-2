/* eslint-disable */
import Swal from "sweetalert2";
import LocalData from "../../data/local-data";
import '../../component/restaurant-list'

class Favorite {
  static async render() {
    return `
        <section class="hero">
            <h1 class="hero-judul">Your Favorite Restoran Fast Food!</h1>
        </section>

        <div class="favorite">
            <restaurant-list class="menu-list" id="content"></restaurant-list>
        </div>
    `;
  }

  static async afterRender() {
    const heroElement = document.querySelector(".hero");
    const restaurantListElement = document.querySelector("restaurant-list");
    const favoriteResto = await LocalData.getAllSaved();

    heroElement.style.backgroundImage = "url('./images/heros/hero-image_2.jpg')";

    if (favoriteResto.length == 0) {
      Swal.fire({
        text: "No Favorite Restaurants Yet!",
        icon: "warning",
      });
    }

    restaurantListElement.restaurants = favoriteResto;
  }
}

export default Favorite;
